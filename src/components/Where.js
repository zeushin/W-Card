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
                <div className="Ribbon">
                    <img src="/image/invi_ic_ribbon@2x.jpg"/>
                </div>
                <h3>더 스카이팜</h3>
                <p>
                    서울특별시 영등포구 여의대로 24<br/>
                    전경련회관 50층<br/>
                    02-2055-4440<br/>
                    주차 가능(지하주차장)
                </p>
                <div className="Map-container">
                    <img width="100%" src="image/invi_img_map@2x.jpg" alt="map" />
                    <div>
                        <button className="Naver" onClick={this._openNaverMap.bind(this)}/>
                        <button className="Kakao" onClick={this._openDaumMap.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Where
