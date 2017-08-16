/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';
import * as firebase from 'firebase'

class ImageSlider extends Component {
    constructor() {
        super();
        this.state = {
            img01: '',
            img02: '',
            img03: '',
            img04: '',
            img05: '',
            img06: '',
            img07: '',
            img08: '',
            isReady: false
        };
        this._downloadImages();
    }

    _downloadImages() {
        let storage = firebase.storage();
        storage.ref('invi_photo_01@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img01: url
            });
            this._isReady();
        });
        storage.ref('invi_photo_02@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img02: url
            });
            this._isReady();
        });
        storage.ref('invi_photo_03@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img03: url
            });
            this._isReady();
        });
        storage.ref('invi_photo_04@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img04: url
            });
            this._isReady();
        });
        storage.ref('invi_photo_05@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img05: url
            });
            this._isReady();
        });
        storage.ref('invi_photo_06@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img06: url
            });
            this._isReady();
        });
        storage.ref('invi_photo_07@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img07: url
            });
            this._isReady();
        });
        storage.ref('invi_photo_08@2x.jpg').getDownloadURL().then((url) => {
            this.setState({
                img08: url
            });
            this._isReady();
        });
    }

    _isReady() {
        let ready =
            this.state.img01.length > 0 &&
            this.state.img02.length > 0 &&
            this.state.img03.length > 0 &&
            this.state.img04.length > 0 &&
            this.state.img05.length > 0 &&
            this.state.img06.length > 0 &&
            this.state.img07.length > 0 &&
            this.state.img08.length > 0;
        this.setState({
            isReady: ready
        });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false
        };
        return (
            <div>
                {
                    this.state.isReady &&
                    <Slider {...settings} className="ImageSlider">
                        <div><img src={ this.state.img01 } alt="header01"/></div>
                        <div><img src={ this.state.img03 } alt="header03"/></div>
                        <div><img src={ this.state.img02 } alt="header02"/></div>
                        <div><img src={ this.state.img04 } alt="header04"/></div>
                        <div><img src={ this.state.img05 } alt="header05"/></div>
                        <div><img src={ this.state.img06 } alt="header06"/></div>
                        <div><img src={ this.state.img07 } alt="header07"/></div>
                        <div><img src={ this.state.img08 } alt="header08"/></div>
                    </Slider>
                }
            </div>
        );
    }
}

export default ImageSlider
