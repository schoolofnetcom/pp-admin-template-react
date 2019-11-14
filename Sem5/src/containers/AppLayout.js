import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Templates from './routes';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';

export default class AppLayout extends Component {
    render() {
        return (
            <div className="d-flex" id="main-wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <Header />

                        { Templates.map((route, index) => (

                            <div className="content-dynamic">
                                <Route 
                                    key={index}
                                    path={route.path}
                                    exact
                                    render ={props => <route.template {...props} /> }/>
                            </div>
                        ))}
               
                </div>
            </div>            
        )
    }
}