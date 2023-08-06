
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";

import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "../serverActions"

import axios from "axios";
import { useForm } from "react-hook-form";

import { CheckPassword } from "../componentes/checkPassword";
import { useNavigate } from "react-router-dom";



export function SignUp() {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const navigate = useNavigate();

    const [Password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState(""); 
    
    const [validInput1, setValidInput1] = useState(false);
    const [validInput2, setValidInput2] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [emailExists, setEmailExists] = useState(false);

    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [isVerified, setIsverified] = useState(false)

    async function handleCaptchaSubmission(token) {
        // Server function to verify captcha
        await verifyCaptcha(token)
        .then(() => setIsverified(true))
        .catch(() => setIsverified(false))
    }

    useEffect(() => {
        setValidPassword(validInput1 && validInput2);
    }, [validInput1, validInput2])
    
    useEffect(() => {
        const verify1 = /^.{8,}$/s;
        const verify2 = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).*$/;
        setValidInput1(verify1.test(Password));
        setValidInput2(verify2.test(Password));
    }, [Password])


    const onSubmit = async (data) => {
        try{
            const newUser = await axios.post("http://localhost:3001/user", data);
            navigate("/SignIn");
        }catch(err){
            if(err.response && err.response.status === 409){
                setEmailExists(true);
            }
            console.error(err)
        }
            

        
    }
    return (
        <React.Fragment>
            <div className="w-screen min-h-screen h-full py-20  bg-gray-200 flex items-center justify-center">
                <div className="bg-white h-[700px] w-[550px] rounded-lg flex flex-col items-center">
                    <h1 className="text-4xl text-black my-7" >Register</h1>
                    <form className="w-[80%] h-full flex flex-col relative" onSubmit={handleSubmit(onSubmit)}>

                        <label>Name:</label>
                        <input id="name" className={`input input-bordered bg-white max-w-[800px] w-[100%] ${!!errors.name ? "input-error" : ""}`}  {...register("name", {required:true, pattern:/^[A-Za-z]+$/})} />

                        <label>Email:</label>
                        <input id="email" className={`input input-bordered bg-white max-w-[800px] w-[100%] ${!!errors.email || emailExists ? "input-error" : ""}`}  {...register("email", {required:true, pattern:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/})} onChange={() => setEmailExists(false)} />
                        <label className="text-red">{!!errors.email ? "Invalid Email" : emailExists ? "Email Already Registered" : ""}</label>

                        <label>Password:</label>
                        <input id="password" className={`input input-bordered bg-white max-w-[800px] w-[100%] ${!validPassword ? "input-error" : ""}` }type="password" {...register("password", {required:true})} onChange={(e) => setPassword(e.target.value)} />
                        <label className="text-red">{!validPassword ? "Invalid Password" : ""}</label>



                        <CheckPassword value="Minimum 8 characters" state={validInput1}/>
                        <CheckPassword value="Include letters, numbers, and symbols" state={validInput2}/>


                        <label>Repeat Password:</label>
                        <input id="repeatpassword" className={`input input-bordered bg-white max-w-[800px] w-[100%] ${Password !== repPassword ? "input-error" : ""}`}  type="password" onChange={(e) => setRepPassword(e.target.value)} />
                        <label className="text-red">{Password !== repPassword ? "Passwords don't match" : ""}</label>

                        <ReCAPTCHA
                        sitekey="6LekBjAnAAAAAFDeyZ06aAvF8-WdW4ebruo7rNde"
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                        className="mt-5 mx-auto"
                        />
                        
                        <Button type="submit" variant="outlined" className="absolute bottom-10 left-[50%] translate-x-[-50%] w-[100px]" sx={{
                            position:"absolute",
                        }}>Register</Button>
                        
                    </form>

                </div>
            </div>
        </React.Fragment>
    )
}