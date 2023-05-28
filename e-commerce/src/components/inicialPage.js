import iconImage from '../icons/icon_image.svg'

import React from 'react';

import '../css/styles.css';

import { GetGoogleBooks } from '../functions/getGoogleBooks.js'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCategory } from '../reducer';
import { changeActiveBook } from '../reducer';


export function InicialPage(props){
    const historyBooks = GetGoogleBooks('history', 7);
    const sciFiBooks = GetGoogleBooks("science-fiction", 7);
    const economicsBooks = GetGoogleBooks("economics", 7);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleClick = (category) => {
        navigate('/products')
        dispatch(changeCategory(category))
    }

    const goToBook = (price, image, title, rating, author, id, description, publisher, pageCount, category, language) => {
        navigate('/product');
        dispatch(changeActiveBook({
            title: title,
            description: description,
            rating: rating,
            author: author,
            language: language,
            id: id,
            image: image,
            price: price,
            publisher: publisher,
            pageCount: pageCount,
            category: category
        }))
    }

    return(
        <section id='inicial-section'>
            <div className="book-departments">
                <div className="book-department" onClick={() => handleClick("Science")}>
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Science</p>
                </div>
                <div className="book-department" onClick={() => handleClick("Philosophy")}>
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Philosophy</p>
                </div>
                <div className="book-department" onClick={() => handleClick("self-help")}>
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Self-Help</p>
                </div>
                <div className="book-department" onClick={() => handleClick("History")}>
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>History</p>
                </div>
                <div className="book-department" onClick={() => handleClick("Science+Fiction")}>
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Sci Fi</p>
                </div>
            </div>
            
            <div className="department-top-sellers">
                <h1 className='title'>Top Sellers in History</h1>
                <div className="department-books">
                    {historyBooks &&
                    historyBooks.map(book => {
                        const price = book?.saleInfo?.listPrice?.amount / 5;
                        const image = book?.volumeInfo?.imageLinks?.thumbnail;
                        const title = book.volumeInfo.title;
                        const rating = (Math.random() * 4 + 1).toFixed(1)
                        const author = book?.volumeInfo?.authors?.slice(0, 2)?.join(' ');
                        const id = book?.id;
                        const description = book?.volumeInfo?.description;
                        const publisher = book?.volumeInfo?.publisher;
                        const pageCount = book?.volumeInfo?.pageCount;
                        const category = book?.volumeInfo?.categories[0];
                        const language = book?.volumeInfo?.language;
                        return(
                            <div className="book-info" onClick={() => goToBook(price, image, title, rating, author, id, description, publisher, pageCount, category, language)}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} className='book'/>
                                <p className='book-name'>{book.volumeInfo.title}</p>
                            </div>
                        )
                    })}
                    
                    
                </div>
            </div>
            <div className="department-top-sellers">
                <h1 className='title'>Top Sellers in Sci-Fi</h1>
                <div className="department-books">
                    {sciFiBooks &&
                    sciFiBooks.map(book => {
                        const price = book?.saleInfo?.listPrice?.amount / 5;
                        const image = book?.volumeInfo?.imageLinks?.thumbnail;
                        const title = book.volumeInfo.title;
                        const rating = (Math.random() * 4 + 1).toFixed(1)
                        const author = book?.volumeInfo?.authors?.slice(0, 2)?.join(' ');
                        const id = book?.id;
                        const description = book?.volumeInfo?.description;
                        const publisher = book?.volumeInfo?.publisher;
                        const pageCount = book?.volumeInfo?.pageCount;
                        const category = book?.volumeInfo?.categories[0];
                        const language = book?.volumeInfo?.language;
                        return(
                            <div className="book-info" onClick={() => goToBook(price, image, title, rating, author, id, description, publisher, pageCount, category, language)}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} className='book'/>
                                <p className='book-name'>{book.volumeInfo.title}</p>
                            </div>
                        )
                    })}
                    
                    
                </div>
            </div>
            <div className="department-top-sellers">
                <h1 className='title'>Top Sellers in Economics</h1>
                <div className="department-books">
                    {economicsBooks &&
                    economicsBooks.map((book, index) => {
                        const price = book?.saleInfo?.listPrice?.amount / 5;
                        const image = book?.volumeInfo?.imageLinks?.thumbnail;
                        const title = book.volumeInfo.title;
                        const rating = (Math.random() * 4 + 1).toFixed(1)
                        const author = book?.volumeInfo?.authors?.slice(0, 2)?.join(' ');
                        const id = book?.id;
                        const description = book?.volumeInfo?.description;
                        const publisher = book?.volumeInfo?.publisher;
                        const pageCount = book?.volumeInfo?.pageCount;
                        const category = book?.volumeInfo?.categories;
                        const language = book?.volumeInfo?.language;
                        return(
                            <div key={index} className="book-info" onClick={() => goToBook(price, image, title, rating, author, id, description, publisher, pageCount, category, language)}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} className='book'/>
                                <p className='book-name'>{book.volumeInfo.title}</p>
                            </div>
                        )
                    })}
                    
                    
                </div>
            </div>
            
        </section>
    )
}