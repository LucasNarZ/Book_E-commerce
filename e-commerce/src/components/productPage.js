import iconStarYellow from '../icons/icon_star_yellow.svg';

import React from 'react';

import { Header } from './header.js';
import { Footer } from './footer.js'
import { GetGoogleBooks } from '../functions/getGoogleBooks.js';

import '../css/styles.css';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';

import { addToCart } from '../reducer';

export function ProductPage(props){
    const dispatch = useDispatch();


    const bookRating = useSelector((state) => state.active.ActiveBook.rating)
    const bookPrice = parseFloat(useSelector((state) => state.active.ActiveBook.price)).toFixed(2);
    const bookTitle = useSelector((state) => state.active.ActiveBook.title);
    const bookImage = useSelector((state) => state.active.ActiveBook.image);
    const bookId = useSelector((state) => state.active.ActiveBook.id);
    const bookAuthor = useSelector((state) => state.active.ActiveBook.author);

    return(
        <React.Fragment>
            <Header />
            <main id='image-info'>
                <div className='image'>
                    <img src={bookImage} />
                </div>
                <div className='info'>
                    <h1>{bookTitle}</h1>
                    <div className='rating'>
                        {bookRating >= 1 && <img src={iconStarYellow} className='rating-star'/>}
                        {bookRating >= 2 && <img src={iconStarYellow} className='rating-star'/>}
                        {bookRating >= 3 && <img src={iconStarYellow} className='rating-star'/>}
                        {bookRating >= 4 && <img src={iconStarYellow} className='rating-star'/>}
                        {bookRating == 5 && <img src={iconStarYellow} className='rating-star'/>}
                        {bookRating}
                    </div>
                    <p className='price'>${bookPrice}</p>
                    <p className='description'>{useSelector((state) => state.active.ActiveBook.description)}</p>
                    <form>
                        <label>CEP</label> <br/>
                        <input type='text' className='input'/>
                        <input type='submit' className='submit' value="check"/>
                    </form>
                    <button className='buy-now'>Buy Now</button>
                    {console.log(useSelector((state) => state.cart))}
                    <button className='add' onClick={() => {
                        dispatch(addToCart({
                            id: bookId,
                            title: bookTitle,
                            author: bookAuthor,
                            image: bookImage,
                            price: bookPrice,
                        }))
                    }}>Add to Cart</button>

                </div>
            </main>
            <div className='complete-info'>
                <p className='title'><b>Title:</b> {useSelector((state) => state.active.ActiveBook.title)}</p>
                <p className='description'><b>Desciption:</b> {useSelector((state) => state.active.ActiveBook.description)}</p>
                <p className='author'><b>Author:</b> {bookAuthor}</p>
                <p className='price'><b>Price:</b> ${parseFloat(useSelector((state) => state.active.ActiveBook.price)).toFixed(2)}</p>
                <p className='rating'><b>Rating:</b>  {useSelector((state) => state.active.ActiveBook.rating)}</p>
                <p className='language'><b>Language:</b> {useSelector((state) => state.active.ActiveBook.language)}</p>
                <p className='editor'><b>Publisher:</b>  {useSelector((state) => state.active.ActiveBook.publisher)}</p>
                <p className='id'><b>Id:</b> {bookId}</p>
                <p className='page-count'><b>Page Count:</b> {useSelector((state) => state.active.ActiveBook.pageCount)} pg</p>
                <p className='category'><b>Category:</b> {useSelector((state) => state.active.ActiveBook.category)}</p>
            </div>
            <Footer />
        </React.Fragment>
        
    )
}