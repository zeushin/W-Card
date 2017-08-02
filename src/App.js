import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import When from "./components/When";
import Where from "./components/Where";
import Who from "./components/Who";
import GuestBook from "./components/GuestBook";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Header/>
                <When/>
                <Where/>
                <Who/>
                <GuestBook/>
                <Footer/>
            </div>
        );
    }
}

export default App;
