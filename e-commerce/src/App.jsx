import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Auth, getLogged, setLogged, getUser, setUser} from './components/auth.js'
import { SignIn } from './components/SignIn.js'

import { connect } from 'react-redux';
import { changeCategory } from './reducer';

import './css/styles.css';

import { CompleteInicialPage } from './components/completeInicialPage.js'
import { ContactUs } from './components/contactUs.js'
import { Products } from './components/products.js'
import { ProductPage } from './components/productPage.js'
import { Cart } from './components/cart.js';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<CompleteInicialPage />}/>
                <Route path="/SignUp" element={<Auth />}/>
                <Route path="/SignIn" element={<SignIn />}/>
                <Route path="/ContactUs" element={<ContactUs />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/product" element={<ProductPage />}/>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    )
}

export default App;
