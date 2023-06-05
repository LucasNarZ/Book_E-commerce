import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "category",
    initialState: {Category: ""},
    reducers:{
        changeCategory(state, action){
            state.Category = action.payload;
        },
    }
});

const activeBookSlice = createSlice({
    name:'activeBook',
    initialState: {ActiveBook: {}},
    reducers: {
        changeActiveBook(state, action){
            console.log(state.active)
            state.ActiveBook = action.payload;
        }
    }
})

const filterSlice = createSlice({
    name:'filter',
    initialState:{Filter: {
        onFilter: false,
        minimunRating: 0,
        minimunValue: 0,
        maxValue: 100000000,
    }},
    reducers: {
        changeOnFilter(state, action){
            state.Filter.onFilter = action.payload;
        },
        changeMinimunRating(state, action){
            state.Filter.minimunRating = action.payload;
        },
        changeMinimunValue(state, action){
            state.Filter.minimunValue = action.payload;
        },
        changeMaxValue(state, action){
            state.Filter.maxValue = action.payload;
        }
    }
})

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers: {
        addToCart(state, action){
            const { id, title, author, price, image } = action.payload;
            const newObj = {
            id: id,
            title: title,
            author: author,
            price: price,
            image: image
            };
            return [...state, newObj];
        },
        removeFromCart(state, action){
            return state.filter((book) => {
                if(book.id != action.payload){
                    return book;
                }
            })
        },
        cleanCart(state, action){
            return []
        }
    }
})

export const categoryReducer = categorySlice.reducer;
export const activeBookReducer = activeBookSlice.reducer;
export const filterReducer = filterSlice.reducer;
export const cartReducer = cartSlice.reducer;


export const { changeCategory } = categorySlice.actions;
export const { changeActiveBook } = activeBookSlice.actions;
export const { changeOnFilter, changeMinimunRating, changeMinimunValue, changeMaxValue } = filterSlice.actions;
export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions;