import React, { Component } from 'react';
import './App.css';
import Header from "./components/ImageSlider";
import When from "./components/When";
import Where from "./components/Where";
import GuestBook from "./components/GuestBook";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        let introImgUrl = 'https://firebasestorage.googleapis.com/v0/b/w-card-ce9f3.appspot.com/o/invi_intro_img%402x.jpg?alt=media&token=892a2ca7-c015-4aed-8f5f-bbf4d6d1fe3c';
        return (
            <div className="App">
                <div className="App-header">
                    <img src={ introImgUrl } className="Intro" alt="logo" />
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
