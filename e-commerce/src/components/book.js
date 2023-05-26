import React from 'react';

import '../css/styles.css';

export function Book(props){
    return(
        <div className='book'>
            <img src={props.image} alt="bookImage" />
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <div className="book-rating">{props.rating}</div>
            <p>{"$" + props.price}</p>
            <button className='addToCart'>Add to Cart</button>
        </div>
    )
}