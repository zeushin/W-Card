/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import logo from '../logo.svg';
import firebase from './firebase-logo.svg'
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p>powered by</p>
                <div>
                    <a href="https://facebook.github.io/react/"><img src={logo} className="App-logo" alt="logo" /></a>
                    <a href="https://firebase.google.com/"><img src={firebase} className="App-logo" alt="logo" /></a>
                </div>
                <p><a href="https://github.com/zeushin/W-Card">W-Card</a></p>
            </div>
        );
    }
}

export default Footer
