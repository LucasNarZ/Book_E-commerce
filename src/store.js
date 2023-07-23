import { configureStore } from '@reduxjs/toolkit';
import {categoryReducer, activeBookReducer, filterReducer, cartReducer} from './reducer'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key:'root',
    version:1,
    storage,
}

const reducer = combineReducers({
    category: categoryReducer,
    active: activeBookReducer,
    filter: filterReducer,
    cart: cartReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer
    
});
export default store;