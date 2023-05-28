import iconStar from '../icons/icon_star.svg'
import iconStarYellow from '../icons/icon_star_yellow.svg'

import React from 'react';
import {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';



import '../css/styles.css';

import { Header } from './header.js'
import { GetGoogleBooks } from '../functions/getGoogleBooks.js'
import { Categorys } from './categorys.js'
import { Book } from './book.js'

export function Products( ){
    const category = useSelector(state => state.category.Category);

    return(
        <React.Fragment>
            <Header />
            <section id='products-filters'>
                <div className="filters">
                    <div className="rating">
                        <p>Minimun costumer rating</p>
                        <div className="rating-1">
                            <img src={iconStarYellow} alt="star"  className='star'/>
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                        </div>
                        <div className="rating-1">
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStarYellow} alt="star"  className='star'/>
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                        </div>
                        <div className="rating-1">
                            <img src={iconStarYellow} alt="star" className='star'/>
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                        </div>
                        <div className="rating-1">
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                        </div>
                    </div>
                    <div className="price">
                        <p>price</p>
                        <label>Min:</label>
                        <input type="text" />
                        <label>Max:</label>
                        <input type="text" />
                    </div>
                    <div className="departments">
                        <p>Departaments</p>
                        <Categorys />
                    </div>
                </div>
                {console.log(GetGoogleBooks(category, 40))}
                <div className="products">
                    {GetGoogleBooks(category, 40)?.map((book, index) => {
                        const price = book?.saleInfo?.listPrice?.amount / 5;
                        const bookImage = book?.volumeInfo?.imageLinks?.thumbnail;
                        const bookTitle = book.volumeInfo.title;
                        const bookRating = (Math.random() * 4 + 1).toFixed(1)
                        const bookAuthor = book?.volumeInfo?.authors?.slice(0, 2)?.join(' ');
                        const bookId = book?.id;
                        const bookDescription = book?.volumeInfo?.description;
                        const publisher = book?.volumeInfo?.publisher;
                        const pageCount = book?.volumeInfo?.pageCount;
                        const Category = book?.volumeInfo?.categories[0];
                        const bookLanguage = book?.volumeInfo?.language;
                        return(
                            <Book key={index} image={bookImage} title={bookTitle} price={price.toFixed(2)} rating={bookRating} author={bookAuthor} bookId={bookId} publisher={publisher} pageCount={pageCount} category={Category} description={bookDescription} language={bookLanguage}/>

                        )
                    })}
                </div>
            </section>
        </React.Fragment>
        
    )
}