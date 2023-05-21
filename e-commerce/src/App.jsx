import bookIcon from './icons/icon_book.svg'
import iconSearch from './icons/icon_search_.svg'
import iconImage from './icons/icon_image.svg'
import userIcon from './icons/icon_user.svg'
import iconStar from './icons/icon_star.svg'
import iconStarYellow from './icons/icon_star_yellow.svg'

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import { Auth, getLogged, setLogged, getUser, setUser} from './components/auth.js'
import { SignIn } from './components/SignIn.js'


import './css/styles.css';


function Header(props){
    const hNavigate = useNavigate();


    return(
        <header id='header'>
            <img src={bookIcon} alt="icon" className='book-icon'/>
            <div className="search">
                <input type="text" placeholder="Search a book..."className='search-bar'/>
                <img src={iconSearch} alt="icon" className='search-btn'/>
            </div>
            <div className={`btns ${!getLogged() ? "btns-not-logged" : "btn-logged"}`}>
                { !getLogged() && <a href="/SignIn" className='sign-in-link'>Sign In</a>}
                {!getLogged() && <button className='sign-up-btn' onClick={() => hNavigate('/SignUp')}>Sign Up</button>}
                {getLogged() && <p>{getUser().displayName}</p>}
                {getLogged() && <img src={userIcon} style={{width:30 + "px"}}alt='user'/>}
            </div>
            
        </header>
    )
}


function GetGoogleBooks(category, maxResults){
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function getBooks(category){
            try{
                const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&printType:books&maxResults=${maxResults}&key=AIzaSyDLjjcAVmXjDaj0OnU_sV_BTUZjLw_cbd8`);
                setBooks(books.data.items);
            }catch(error){
                console.error(error)
                alert('Failed to fetch self-help books!');
            }
            
        }
        getBooks(category, maxResults);
    }, [category, maxResults])
    return books;
}
const CategoriasLivros = ({ changeCategory }) => {
    const [categorias, setCategorias] = useState({ 
    "Fiction":"Fiction",
    "History":"History",
    "Science":"Science",
    "Technology":"Technology",
    "Travel":"Travel",
    "Biography Autobiography":"Biography+%26+Autobiography",
    "Business Economics":"Business+%26+Economics",
    "Health Fitness":"Health+%26+Fitness",
    "Art":"Art",
    "Cooking":"Cooking",
    "Education":"Education",
    "Philosophy":"Philosophy",
    "Religion":"Religion",
    "Sports Recreation":"Sports+%26+Recreation",
    "Poetry":"Poetry",
    "Music":"Music",
    "Drama":"Drama",
    "Comics Graghic Novels":"Comics+%26+Graphic+Novels",
    "Science Fiction":"Science+Fiction",
    "Self-Help":"Self-Help"});
  
    
    return (
      <div>
        <ul> 
          {Object.entries(categorias).map(([showCategory, category]) => (
            <li key={showCategory} className='category' onClick={() => changeCategory(category)}>{showCategory}</li>
          ))}
        </ul>
      </div>
    );
}
function Book(props){
    return(
        <div className='book'>
            <img src={props.image} alt="bookImage" />
            <h1>{props.title}</h1>
            <div className="book-rating">

            </div>
            <p>{props.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}


function InicialPage(props){
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
                <div className="book-department" onClick={() => props.changeCategory}>
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

function Footer(props){
    return(
        <footer id='footer'>
            <p className='contact-us'>Contact Us</p>
            <a href="/ContactUs" className='send a message'>send a message</a>
            <p className='email'>send an email for bookland@gmail.com</p>
            <img src={bookIcon} alt="bookIcon" />
            <p className='copy'>© 1993-2021, bookland.com</p>
        </footer>
    )
}

function ContactUs(props){
    const cNavigate = useNavigate();

    const handleSubmit = event => {
        alert("message send with success")
        cNavigate('/');
    }

    return(
        <section id='contact-us-section'>
            <img src={bookIcon} alt="book-icon" />
            <div className="form">
                <p className='send-a-message'>Send a message</p>
                <form onSubmit={handleSubmit}>
                    <label>Name</label> <br/>
                    <input type="text" required/><br/>
                    <label>Email</label><br/>
                    <input type="email" required/><br/>
                    <label>Subject</label><br/>
                    <input type="text" required/><br/>
                    <label>Message</label><br/>
                    <textarea name="" id="" cols="38" rows="5" required></textarea>
                    <input type="submit" className='submit'/>
                </form>
            </div>
        </section>
    )
}


function Products(props){
    const [category, setCategory] = useState('self-help')

    const changeCategory = (category) => {
        setCategory(category)
    }

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
                        <CategoriasLivros changeCategory={changeCategory}/>
                    </div>
                </div>
                <div className="products">
                    {console.log(category)}
                    {GetGoogleBooks(category, 40).filter((book) => {
                        if(book.saleInfo.saleability == "FOR_SALE"){
                            return book
                        }}).map((book, index) => {
                        return(
                            <Book key={index} image={book?.volumeInfo?.imageLinks?.thumbnail} title={book.volumeInfo.title} price={book?.saleInfo?.listPrice?.amount} />
                        )
                    })}
                </div>
            </section>
        </React.Fragment>
        
    )
}


function CompleteInicialPage(props){
    return(
        <React.Fragment>
            <Header />
            <InicialPage />
            <Footer />
        </React.Fragment>
    )
}

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<CompleteInicialPage />}/>
                <Route path="/SignUp" element={<Auth />}/>
                <Route path="/SignIn" element={<SignIn />}/>
                <Route path="/ContactUs" element={<ContactUs />}/>
                <Route path="/products" element={<Products />}/>
            </Routes>
        </Router>
    )
}

export default App;
