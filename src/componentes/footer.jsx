import bookIcon from '../icons/icon_book.svg'

import React from 'react';

import '../css/styles.css';

export function Footer(props){
    return(
        <footer id='footer'>
            <p className='contact-us'>Contact Us</p>
            <a href="/ContactUs" className='send a message'>send a message</a>
            <p className='email'>send an email for bookland@gmail.com</p>
            <img src={bookIcon} alt="bookIcon" />
            <p className='copy'>© 1993-2021, bookland.com</p>
        </footer>
    )
}