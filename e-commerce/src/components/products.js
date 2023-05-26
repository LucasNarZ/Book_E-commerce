import iconStar from '../icons/icon_star.svg'
import iconStarYellow from '../icons/icon_star_yellow.svg'

import React from 'react';
import {useState, useEffect} from 'react';


import { connect } from 'react-redux';
import { changeCategory } from '../reducer';

import '../css/styles.css';

import { Header } from './header.js'
import { GetGoogleBooks } from '../functions/getGoogleBooks.js'
import { Categorys } from './categorys.js'
import { Book } from './book.js'

export function Products({ Category }){
    const [category, setCategory] = useState(Category)


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
                        <Categorys changeCategory={changeCategory}/>
                    </div>
                </div>
                <div className="products">
                    {GetGoogleBooks(category, 40)?.map((book, index) => {
                        const price = book?.saleInfo?.listPrice?.amount / 5;
                        const bookImage = book?.volumeInfo?.imageLinks?.thumbnail;
                        const bookTitle = book.volumeInfo.title;
                        const bookRating = (Math.random() * 4 + 1).toFixed(1)
                        const bookAuthor = book?.volumeInfo?.authors?.slice(0, 2)?.join(' ');
                        return(
                            <Book key={index} image={bookImage} title={bookTitle} price={price.toFixed(2)} rating={bookRating} author={bookAuthor}/>

                        )
                    })}
                </div>
            </section>
        </React.Fragment>
        
    )
}