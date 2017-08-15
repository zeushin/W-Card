import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/ImageSlider";
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
                    <img src="/image/invi_intro_img@2x.jpg" className="Intro" alt="logo" />
                </div>
                <Header/>
                <When/>
                <Where/>
                {/*<Who/>*/}
                <GuestBook/>
                <Footer/>
            </div>
        );
    }
}

export default App;
