import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import ShipInfo from '../shipInfo/shipInfo';

const Routes = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={ShipInfo} />
        </Switch>
    </div>
);

export default Routes;
