import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../screens/Home';
import { Works } from '../../screens/Works';
import { Links } from '../../screens/Links';
import { Workshops } from '../../screens/Workshops';
import { Upcoming } from '../../screens/Upcoming';

export const Router = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/works">
                    <Works />
                </Route>
                <Route exact path="/links">
                    <Links />
                </Route>
                <Route exact path="/workshops">
                    <Workshops />
                </Route>
                <Route exact path="/upcoming">
                    <Upcoming />
                </Route>
            </Switch>
    );
};
