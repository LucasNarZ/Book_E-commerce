import bookIcon from './icons/icon_book.svg'
import iconSearch from './icons/icon_search_.svg'
import iconImage from './icons/icon_image.svg'

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import './css/styles.css';


function Header(props){
    return(
        <header id='header'>
            <img src={bookIcon} alt="icon" className='book-icon'/>
            <div className="search">
                <input type="text" placeholder="Search a book..."className='search-bar'/>
                <img src={iconSearch} alt="icon" className='search-btn'/>
            </div>
            <div className="btns">
                <a href="#" className='sign-in-link'>Sign In</a>
                <button className='sign-up-btn'>Sign Up</button>
            </div>
            
        </header>
    )
}




function InicialPage(props){
    const [selfHelpBooks, setSelfHelpBooks] = useState();
    useEffect(() => {
        async function getBooks(){
            try{
                const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:economics&printType:books&maxResults=7&key=AIzaSyDLjjcAVmXjDaj0OnU_sV_BTUZjLw_cbd8`);
                setSelfHelpBooks(books.data.items);
            }catch(error){
                console.error(error)
                alert('Failed to fetch self-help books!');
            }
            
        }
        getBooks();
    }, [])
    
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
                <h1 className='title'>Top Sellers in Self-Help</h1>
                <div className="department-books">
                    {selfHelpBooks &&
                    selfHelpBooks.map(book => {
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
                <h1 className='title'>Top Sellers in Self-Help</h1>
                <div className="department-books">
                    {selfHelpBooks &&
                    selfHelpBooks.map(book => {
                        return(
                            <div className="book-info">
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


function App() {
    return(
        <React.Fragment>
            <Header />
            <InicialPage />
        </React.Fragment>
    )
}

export default App;
