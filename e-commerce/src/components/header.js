import bookIcon from '../icons/icon_book.svg'
import iconSearch from '../icons/icon_search_.svg'
import userIcon from '../icons/icon_user.svg'

import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import { Auth, getLogged, setLogged, getUser, setUser} from './auth.js'
import { SignIn } from './SignIn.js'

import { connect } from 'react-redux';
import { changeCategory } from '../reducer';

import '../css/styles.css';

export function Header({ changeCategory }){
    const hNavigate = useNavigate();
    const [Search, setSearch] = useState('');


    return(
        <header id='header'>
            <img src={bookIcon} alt="icon" className='book-icon'/>
            <div className="search">
                <input type="text" placeholder="Search a book..."className='search-bar' onChange={(e) => {setSearch(e.currentTarget.value)}}/>
                <img src={iconSearch} alt="icon" className='search-btn' onClick={()  => {
                    hNavigate('/products');
                }}/>
            </div>
            <div className={`btns ${!getLogged() ? "btns-not-logged" : "btn-logged"}`}>
                { !getLogged() && <a href="/SignIn" className='sign-in-link'>Sign In</a>}
                {!getLogged() && <button className='sign-up-btn' onClick={() => hNavigate('/SignUp')}>Sign Up</button>}
                {getLogged() && <p>{getUser().displayName}</p>}
                {getLogged() && <img src={userIcon} style={{width:30 + "px"}}alt='user'/>}
            </div>
            
        </header>
    )
}