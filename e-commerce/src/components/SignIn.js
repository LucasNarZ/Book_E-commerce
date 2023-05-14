import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import bookIcon from '../icons/icon_book.svg'

import { logged } from './auth'

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handlesignIn = async event => {
        event.preventDefault();
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            alert(`login realised with success, Wealcome ${userCredentials.displayName}`)
            Navigate('/')
            logged = true;

        }catch(err){
            alert(err)
        }
    }

    return(
        <section id='sign-in-section'>
        <img src={bookIcon} alt="book-icon" />
        <div className="form">
            <p className='send-a-message'>Login</p>
            <form onSubmit={handlesignIn}>
                <label>Email</label><br/>
                <input type="email" required onChange={(e) => setEmail(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input type="password" required onChange={(e) => setPassword(e.target.value)}/><br/>
                <input type="submit" className='submit' value="Login"/>
                <p className='terms'>By loging, you agree to bookland's <u>Conditions of Use</u> and <u>Privacy Notice</u>.</p>
            </form>
        </div>
    </section> 
    )
}