import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../screens/Home';
import { Works } from '../../screens/Works';

export const Router = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/works">
                    <Works />
                </Route>
            </Switch>
    );
};
