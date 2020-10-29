import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from 'react-router-dom';
import Header from './Header.js';
import ListPage from './ListPage.js';
import Home from './Home.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                    <Route 
                        path="/list" 
                        exact
                        render={(routerProps) => <ListPage {...routerProps} />} 
                    />
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <Home {...routerProps} />} 
                    />
                    </Switch>
                </Router>
            </div>
        )
    }
}