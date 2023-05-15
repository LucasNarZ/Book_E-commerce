import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import bookIcon from '../icons/icon_book.svg';

let logged = false;
let user;

export const setLogged = (value) => {
    logged = value;
}
  

export const getLogged = () => {
    return logged;
}

export const setUser= (value) => {
    user = value;
}
  

export const getUser = () => {
    return user;
}

export const Auth = () => {
    const siNavigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Name, setName] = useState("");

    const SignEmailPassword = async event => {
        event.preventDefault();
        try{
            const userInfo = await createUserWithEmailAndPassword(auth, email, password);
            const user = userInfo.user;
            await updateProfile(user , {
                displayName: Name
            })
            console.log(userInfo);
            setLogged(true);
            setUser(userInfo.user);
            siNavigate('/');
            
        }catch(err){
            if(err.code == 'auth/weak-password'){
                alert('Password too weak, password should be at least 6 characters');
            }if(err.code == 'auth/invalid-email'){
                alert('Invalid Email');
            }else{
                alert('Error! Try again later');
                console.error(err);
            }
        }
        
    }


    return(
        <section id='sign-up-section'>
            <img src={bookIcon} alt="book-icon" />
            <div className="form">
                <p className='send-a-message'>Create Account</p>
                <form onSubmit={SignEmailPassword} >
                    <label>Name</label> <br/>
                    <input type="text" required onChange={(e) => setName(e.target.value)}/><br/>
                    <label>Email</label><br/>
                    <input type="email" required onChange={(e) => setEmail(e.target.value)}/><br/>
                    <label>Password</label><br/>
                    <input type="password" required onChange={(e) => setPassword(e.target.value)}/><br/>
                    <label>Repeat Password</label><br/>
                    <input type="password" required/>
                    <input type="submit" className='submit' value="Create Account"/>
                    <p className='terms'>By creating an account, you agree to bookland's <u>Conditions of Use</u> and <u>Privacy Notice</u>.</p>
                </form>
            </div>
        </section>
    )
}

