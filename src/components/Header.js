/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import Slider from 'react-slick';

class Header extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <img src="image/header01.jpeg"/>
                <img src="image/header02.jpeg"/>
                <img src="image/header03.jpeg"/>
                <img src="image/header04.jpeg"/>
            </Slider>
        );
    }
}

export default Header
