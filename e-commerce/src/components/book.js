import React from 'react';

import { useNavigate } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux';

import '../css/styles.css';
import { changeActiveBook } from '../reducer';

export function Book(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate('/product');
        dispatch(changeActiveBook(props.bookId))
    }

    return(
        <div className='book' onClick={handleClick}>
            <img src={props.image} alt="bookImage" />
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <div className="book-rating">{props.rating}</div>
            <p>{"$" + props.price}</p>
            <button className='addToCart'>Add to Cart</button>
        </div>
    )
}