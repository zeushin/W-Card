/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

class ImageSlider extends Component {
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
            <Slider {...settings} className="ImageSlider">
                <img src="image/header01.jpeg" alt="header01" />
                <img src="image/header02.jpeg" alt="header02" />
                <img src="image/header03.jpeg" alt="header03" />
                <img src="image/header04.jpeg" alt="header04" />
            </Slider>
        );
    }
}

export default ImageSlider
