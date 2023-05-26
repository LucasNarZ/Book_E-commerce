import bookIcon from '../icons/icon_book.svg'

import React from 'react';

import {useNavigate} from 'react-router-dom';

import '../css/styles.css';

export function ContactUs(props){
    const cNavigate = useNavigate();

    const handleSubmit = event => {
        alert("message send with success")
        cNavigate('/');
    }

    return(
        <section id='contact-us-section'>
            <img src={bookIcon} alt="book-icon" />
            <div className="form">
                <p className='send-a-message'>Send a message</p>
                <form onSubmit={handleSubmit}>
                    <label>Name</label> <br/>
                    <input type="text" required/><br/>
                    <label>Email</label><br/>
                    <input type="email" required/><br/>
                    <label>Subject</label><br/>
                    <input type="text" required/><br/>
                    <label>Message</label><br/>
                    <textarea name="" id="" cols="38" rows="5" required></textarea>
                    <input type="submit" className='submit'/>
                </form>
            </div>
        </section>
    )
}