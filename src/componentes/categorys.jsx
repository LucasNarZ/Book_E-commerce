import React from 'react';
import {useState, useEffect} from 'react';


import { useDispatch } from 'react-redux';
import { changeCategory } from '../reducer';

import '../css/styles.css'
;
export const Categorys = (props) => {
    const dispatch = useDispatch();
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
    "Self-Help":"Self-Help",
    "Economics":'economics'});

    
    return (
    <div>
        <ul> 
        {Object.entries(categorias).map(([showCategory, category]) => (
            <li key={showCategory} className='category' onClick={() => dispatch(changeCategory(category))}>{showCategory}</li>
        ))}
        </ul>
    </div>
    );
}