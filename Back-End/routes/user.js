const express = require("express");

const router = express.Router();

const argon2 = require('argon2');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { body, validationResult } = require('express-validator');

const cors = require('cors');

const app = express();


require('dotenv').config();

const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.use(express.json());


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
const corsOptions = {
    origin: 'http://localhost:3000', // Substitua pelo domínio do seu site
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));



async function searchUserInDB(users, userEmail, userPassword){
    const promises = users.map(async (user) => {
        return user.email === userEmail && await comparePassword(user.password, userPassword);
    })

    const results = await Promise.all(promises);
    return results.some(result => result === true)
}


async function comparePassword(hashedPassword, password){
    try{
        const isMatch = await argon2.verify(hashedPassword, password);
        return isMatch;
    }catch(err){
        console.error(err);
    }
}

router.get("/user", async (req, res) => {
    try{
        const users = await prisma.User.findMany();
        res.json(users);
    }catch(err){
        console.error(err);
    }
})

router.post("/user", [
    body("name").trim().matches(/^[A-Za-z]+$/).escape(),
    body("email").trim().isEmail().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/).escape(),
    body("password").trim().matches(/^.{8,}$/s).matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).*$/).escape()
],async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({message: "An error occured"});
    }
    const { name, email, password }= req.body;
    try{
        const existingUser = await prisma.User.findFirst({
            where: {
              email: email,
            },
          });
      
          if (existingUser) {
            return res.status(409).json({ message: "User already Registered" });
          }
        const hashedPassword = await argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            timeCost: 3,
            parallelism: 2,
            hashLength: 128,
            saltLength: 20,

        });
        const newUser = await prisma.User.create({data: {name:name, email:email, password:hashedPassword}});
        res.json(newUser);
    }catch(err){
        console.error(err);
    }
})

router.post("/user/login", async (req, res) => {
    try{
        const { email, password } = req.body;
        const users = await prisma.User.findMany();
        const isUserRegistered = await searchUserInDB(users, email, password);
        if(isUserRegistered === false){
            res.json(false);
            return
        }
        const registeredUser = await prisma.User.findUnique({
            where:{email:email}
        })
        
        res.json(true);
    }catch(err){
        console.error(err);
    }
})

router.post("/cart", passport.authenticate('jwt', {session:false}), async (req, res) => {
    const userId = req.cookies.userId;
    const { idBook, title, price, imageLink, author } = req.body;
    const cartItem = await prisma.cartItem.create({data:{
        idBook,
        title,
        price,
        author,
        imageLink,
        userId
    }});
     
    res.json(cartItem);
})

router.get("/cart", passport.authenticate('jwt', {session:false}), async (req, res) => {
    const userId = req.cookies.userId;
    const { cart } = await prisma.User.findUnique({
        where:{
            userId,
        }
    })
    res.json(cart);
})

router.delete("/cart", passport.authenticate('jwt', {session:false}), async (req, res) => {
    const userId = req.cookies.userId;
    await prisma.cart.delete({where:{
        userId:userId
    }})
    res.json(userId);
})
router.delete("/car/:id", passport.authenticate('jwt', {session:false}), async (req, res) => {
    const userId = req.cookies.userId;
    const idBook = req.params.id;
    const cart = await prisma.cart.delete({where:{
        userId,
        idBook
    }})
    res.json(cart);
})




module.exports = router;
