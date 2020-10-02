import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';

const Routes = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </div>
);

export default Routes;
