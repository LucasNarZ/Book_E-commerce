import React from 'react';

import '../css/styles.css';

import { Header } from './header.js';
import { InicialPage } from './inicialPage.js';
import { Footer } from './footer.js';

export function CompleteInicialPage(props){
    return(
        <React.Fragment>
            <Header />
            <InicialPage />
            <Footer />
        </React.Fragment>
    )
}