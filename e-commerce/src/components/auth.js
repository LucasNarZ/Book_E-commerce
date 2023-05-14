import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import bookIcon from '../icons/icon_book.svg'

export let logged = false;

export const Auth = () => {
    const siNavigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Name, setName] = useState("");

    const SignEmailPassword = async event => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            
        }catch(err){
            console.error(err)
        }
        logged = true;
        siNavigate('/');
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
                    <input type="text" required onChange={(e) => setPassword(e.target.value)}/><br/>
                    <label>Repeat Password</label><br/>
                    <input type="text" required/>
                    <input type="submit" className='submit' value="Create Account"/>
                    <p className='terms'>By creating an account, you agree to bookland's <u>Conditions of Use</u> and <u>Privacy Notice</u>.</p>
                </form>
            </div>
        </section>
    )
}