import iconStar from '../icons/icon_star.svg'
import iconStarYellow from '../icons/icon_star_yellow.svg'

import React from 'react';
import {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeOnFilter, changeMinimunRating, changeMinimunValue, changeMaxValue } from '../reducer'


import '../css/styles.css';

import { Header } from './header.js'
import { GetGoogleBooks } from '../functions/getGoogleBooks.js'
import { Categorys } from './categorys.js'
import { Book } from './book.js'

export function Products( ){
    const category = useSelector(state => state.category.Category);
    const dispatch = useDispatch();
    const minimumRating = useSelector(state => state.filter.Filter.minimunRating);
    const minimunValue = useSelector(state => state.filter.Filter.minimunValue);
    const maxValue = useSelector(state => state.filter.Filter.maxValue)
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const filterByRating = (rating) => {
        dispatch(changeOnFilter(true));
        dispatch(changeMinimunRating(rating));
    }

    
    const limpar = () => {
        dispatch(changeOnFilter(false));
        dispatch(changeMinimunRating(0));
        dispatch(changeMaxValue(10000000000));
        dispatch(changeMinimunValue(0));
    }

    const filterByValue = (min, max) => {
        dispatch(changeMaxValue(max));
        dispatch(changeMinimunValue(min));
    }

    
    return(
        <React.Fragment>
            <Header />
            <section id='products-filters'>
                <div className="filters">
                    <div className="rating">
                        <button onClick={limpar}>limpar</button>
                        <p>Minimun costumer rating</p>
                        <div className="rating-1" onClick={() => filterByRating(1)}>
                            <img src={iconStarYellow} alt="star"  className='star'/>
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                        </div>
                        <div className="rating-1" onClick={() => filterByRating(2)}>
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStarYellow} alt="star"  className='star'/>
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                        </div>
                        <div className="rating-1" onClick={() => filterByRating(3)}>
                            <img src={iconStarYellow} alt="star" className='star'/>
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStarYellow} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                            <img src={iconStar} alt="star" className='star' />
                        </div>
                        <div className="rating-1" onClick={() => filterByRating(4)}>
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
                        <input type="text" onChange={(e) => setMin(e.currentTarget.value)}/>
                        <label>Max:</label>
                        <input type="text" onChange={(e) => setMax(e.currentTarget.value)}/>
                        <button onClick={() => filterByValue(min, max)}>Go</button>
                    </div>
                    <div className="departments">
                        <p>Departaments</p>
                        <Categorys />
                    </div>
                </div>

                <div className="products">
                    {
                    GetGoogleBooks(category, 40)?.filter((book) => {
                        const bookRating = (book.volumeInfo.title.length % 5) + (book.volumeInfo.title.length % 10) / 10;
                        return (bookRating >  minimumRating) && (maxValue > book?.saleInfo?.listPrice?.amount / 5) && (book?.saleInfo?.listPrice?.amount / 5> minimunValue)
                    })?.map((book, index) => {
                        const price = book?.saleInfo?.listPrice?.amount / 5;
                        const bookImage = book?.volumeInfo?.imageLinks?.thumbnail;
                        const bookTitle = book.volumeInfo.title;
                        const bookRating = (book.volumeInfo.title.length % 5) + (book.volumeInfo.title.length % 10) / 10;
                        const bookAuthor = book?.volumeInfo?.authors?.slice(0, 2)?.join(',');
                        const bookId = book?.id;
                        const bookDescription = book?.volumeInfo?.description;
                        const publisher = book?.volumeInfo?.publisher;
                        const pageCount = book?.volumeInfo?.pageCount;
                        const Category = book?.volumeInfo?.categories?.slice(0, 2)?.join(',');
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