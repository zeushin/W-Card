/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import './Where.css';

class Where extends Component {
    _openNaverMap() {
        window.open('http://naver.me/xgm6alNS');
    }

    _openDaumMap() {
        window.open('http://dmaps.kr/5ma44');
    }

    render() {
        return (
            <div className="Where bottomBorder sidePadding">
                <h1>여기에서 뵈어요</h1>
                <h3>더 스카이팜</h3>
                <p>
                    서울특별시 영등포구 여의대로 24<br/>
                    전경련회관 50층<br/>
                    02-2055-4440<br/>
                    주차 가능(지하주차장)
                </p>
                <div className="mapContainer">
                    <img width="100%" src="image/where01.png" alt="map" />
                    <button onClick={ this._openNaverMap.bind(this) }>Naver Map</button>
                    <button onClick={ this._openDaumMap.bind(this) }>Daum Map</button>
                </div>
            </div>
        );
    }
}

export default Where
