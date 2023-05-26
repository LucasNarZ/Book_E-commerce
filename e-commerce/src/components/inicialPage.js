import iconImage from '../icons/icon_image.svg'

import React from 'react';

import '../css/styles.css';

import { GetGoogleBooks } from '../functions/getGoogleBooks.js'

export function InicialPage(props){
    const historyBooks = GetGoogleBooks('history', 7);
    const sciFiBooks = GetGoogleBooks("science-fiction", 7);
    const economicsBooks = GetGoogleBooks("economics", 7);
    
    return(
        <section id='inicial-section'>
            <div className="book-departments">
                <div className="book-department">
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Fantasy</p>
                </div>
                <div className="book-department">
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Economics</p>
                </div>
                <div className="book-department">
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Self-Help</p>
                </div>
                <div className="book-department">
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>History</p>
                </div>
                <div className="book-department">
                    <img src= {iconImage} alt="book" className='book'/>
                    <p className='department-name'>Sci Fi</p>
                </div>
            </div>
            
            <div className="department-top-sellers">
                <h1 className='title'>Top Sellers in History</h1>
                <div className="department-books">
                    {historyBooks &&
                    historyBooks.map(book => {
                        return(
                            <div className="book-info">
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
                        return(
                            <div className="book-info">
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
                        return(
                            <div key={index} className="book-info">
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