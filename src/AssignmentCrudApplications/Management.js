import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './Admin';
import Employee from './Employee';
import Login from './Login';

class Management extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route  path="./Admin.js" component={Admin}/>
                    <Route path="./Employee.js" component={Employee}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Management;