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
            state.ActiveBook = action.payload;
        }
    }
})

export const categoryReducer = categorySlice.reducer;
export const activeBookReducer = activeBookSlice.reducer;


export const { changeCategory } = categorySlice.actions;
export const { changeActiveBook } = activeBookSlice.actions;