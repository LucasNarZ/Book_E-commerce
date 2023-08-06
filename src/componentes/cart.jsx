import React from 'react';

import { Header } from './header.jsx'
import { Footer } from './footer.jsx'

import { useSelector, useDispatch } from 'react-redux';

import '../css/styles.css'

import { useState, useEffect } from 'react';

import { addToCart, removeFromCart, cleanCart } from '../reducer.js';

export function Cart(props){
    const [totalValue, setTotalValue] = useState(0);
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  
    useEffect(() => {
      let totalPrice = 0;
      cartItems.forEach((book) => {
        totalPrice += parseFloat(book.price);
      });
      setTotalValue(totalPrice);
    }, [cartItems]);
    return(
        <React.Fragment>
            <Header />
            <h1>Cart</h1>
            <div className='cart'>
                
                <div className='products'>
                    <p className='clean-cart' onClick={() => {
                        dispatch(cleanCart())
                    }}>Clean the Cart</p>
                    {useSelector((state => state.cart)).map((book => {
                        return(
                            <div className='product'>
                                <img src={book?.image} className='image'/>
                                <div className='info'>
                                    <p className='title'>{book?.title}</p>
                                    <p className='author'>{book?.author}</p>
                                    <p className='stock'>In Stock</p>
                                    <p className='remove' onClick={() => {
                                        console.log("eeeeeeeeeee")
                                        dispatch(removeFromCart(book?.id))
                                    }}>Remove</p>
                                </div>
                                <p className='price'>${book?.price}</p>
                            </div>
                        )
                    }))}
                </div>
                <div className='procced'>
                    <div className='total'>
                        <p className='subtotal'>Subtotal:</p>
                        <p className='subtotal-value'>${totalValue !== 0 ? totalValue : "0.00"}</p>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}