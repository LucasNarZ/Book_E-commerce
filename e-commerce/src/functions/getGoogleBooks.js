import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import '../css/styles.css';


export function GetGoogleBooks(category, maxResults){
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function getBooks(category){
            try{
                const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}&printType:books&filter=paid-ebooks&maxResults=${maxResults}&key=AIzaSyDLjjcAVmXjDaj0OnU_sV_BTUZjLw_cbd8`);
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