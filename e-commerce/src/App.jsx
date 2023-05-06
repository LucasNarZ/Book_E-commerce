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
                <h1 className='title'>Top Sellers in Self-Help</h1>
                <div className="department-books">
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>How to Win Friends and Influence People</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The 7 Habits of Highly Effective People</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Think and Grow Rich</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The Power of Positive Thinking</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Awaken the Giant Within</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The Alchemist</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The Four Agreements</p>
                    </div>
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

            <div className="department-top-sellers">
                <h1 className='title'>Top Sellers in Sci Fi</h1>
                <div className="department-books">
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>1984</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Brave New World</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Dune</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The Hitchhiker's Guide to the Galaxy</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Ender's Game</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>The War of the Worlds</p>
                    </div>
                    <div className="book-info">
                        <img src={iconImage} alt="book" className='book'/>
                        <p className='book-name'>Fahrenheit 451</p>
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
