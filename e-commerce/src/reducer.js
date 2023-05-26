import { createSlice } from "@reduxjs/toolkit";


const inicialState = {
    Category: "",
};

const reducer = createSlice({
    name: "categoryReducer",
    inicialState,
    reducers: {
        changeCategory: (state, action) => {
            state.Category = action.payload;
        },
    },
});

export const { changeCategory } = reducer.actions;
export default reducer.reducer;