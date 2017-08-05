/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';

class Where extends Component {
    _openNaverMap() {
        window.open('http://naver.me/xgm6alNS');
    }

    _openDaumMap() {
        window.open('http://dmaps.kr/5ma44');
    }

    render() {
        return (
            <div>
                <h1>어디서</h1>
                <h3>여의도 전경련빌딩 50층</h3>
                <h3>세상의 모든 아침</h3>
                <div>
                    <img width="100%" src="image/where01.png" alt="map" />
                    <button onClick={ this._openNaverMap.bind(this) }>Naver Map</button>
                    <button onClick={ this._openDaumMap.bind(this) }>Daum Map</button>
                </div>
            </div>
        );
    }
}

export default Where
