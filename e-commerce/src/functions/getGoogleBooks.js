import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import '../css/styles.css';


export function GetGoogleBooks(category_id, maxResults = 1, responseWith = "category" ){
    const [books, setBooks] = useState([]);
    let reponse;
    useEffect(() => {
        async function getBooks(category, maxResults = 1){
            try{
                if(responseWith == "id"){
                    reponse = await axios.get(`https://www.googleapis.com/books/v1/volumes/${category}&key=AIzaSyDLjjcAVmXjDaj0OnU_sV_BTUZjLw_cbd8`);
                }else{
                    console.log("b")
                    reponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}&printType:books&filter=paid-ebooks&maxResults=${maxResults}&key=AIzaSyDLjjcAVmXjDaj0OnU_sV_BTUZjLw_cbd8`);
                }
                setBooks(reponse.data.items);
            }catch(error){
                console.error(error)
                alert('Failed to fetch books!');
            }
            
        }
        getBooks(category_id, maxResults);
    }, [category_id, maxResults])
    return books;
}