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
                <img src="image/invi_photo_01@2x.jpg" alt="header01" />
                <img src="image/invi_photo_03@2x.jpg" alt="header01" />
                <img src="image/invi_photo_02@2x.jpg" alt="header01" />
                <img src="image/invi_photo_04@2x.jpg" alt="header01" />
                <img src="image/invi_photo_05@2x.jpg" alt="header01" />
                <img src="image/invi_photo_06@2x.jpg" alt="header01" />
                <img src="image/invi_photo_07@2x.jpg" alt="header01" />
                <img src="image/invi_photo_08@2x.jpg" alt="header01" />
            </Slider>
        );
    }
}

export default ImageSlider
