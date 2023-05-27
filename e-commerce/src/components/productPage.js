import iconStarYellow from '../icons/icon_star_yellow.svg';

import React from 'react';

import { Header } from './header.js';
import { GetGoogleBooks } from '../functions/getGoogleBooks.js';

import '../css/styles.css';

import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';



export function ProductPage(props){
    const bookId = useSelector((state) => state.active.ActiveBook);
    console.log(GetGoogleBooks(bookId, 1, "id"))


    return(
        <Header />
        //{}
    )
}