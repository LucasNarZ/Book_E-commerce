import bookIcon from './icons/icon_book.svg'
import iconSearch from './icons/icon_search_.svg'
import iconImage from './icons/icon_image.svg'

import React from 'react';

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
                <h1 className='title'>Top Sellers in fantasy</h1>
                <div className="department-books">
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The Hobbit</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Game of Thrones</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Lord of the Rings</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Harry Potter</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Percy Jackson</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The Name of the Wind</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The Dark Tower</p>
                    </div>
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
