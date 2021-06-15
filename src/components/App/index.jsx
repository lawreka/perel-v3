import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Styles } from './styles';
import { Nav } from '../Nav';
import { Router } from '../Router';

export const App = () => {
    return (
        <Styles>
            <BrowserRouter>
                <Nav />
                <Router />
            </BrowserRouter>
        </Styles>
    );
};
