import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA0ldurtCjUO9TotvpSjGLSC1P82u_-T9w",
    authDomain: "w-card-ce9f3.firebaseapp.com",
    databaseURL: "https://w-card-ce9f3.firebaseio.com",
    projectId: "w-card-ce9f3",
    storageBucket: "",
    messagingSenderId: "84537331815"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
