import bookIcon from './icons/icon_book.svg'
import iconSearch from './icons/icon_search_.svg'
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

function App() {
    return(
        <React.Fragment>
            <Header />
        </React.Fragment>
    )
}

export default App;
