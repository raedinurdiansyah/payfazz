import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../page/Home';
import Profile from '../page/Profile';


class MainRoutes extends Component {
    render () {
        return (
            <div>
                <Route exact path="" component={Home} />
                <Route path="/profile" component={Profile} />
            </div>
        )
    }
}

export default MainRoutes;