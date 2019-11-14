import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Link to='/'>Home</Link>
            </div>            
        )
    }
}