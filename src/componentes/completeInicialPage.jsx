import React from 'react';

import '../css/styles.css';

import { Header } from './header.jsx';
import { InicialPage } from './inicialPage.jsx';
import { Footer } from './footer.jsx';

export function CompleteInicialPage(props){
    return(
        <React.Fragment>
            <Header />
            <InicialPage />
            <Footer />
        </React.Fragment>
    )
}