/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import './Where.css';

class Where extends Component {
    _openNaverMap() {
        window.open('http://naver.me/Gkuaunj4');
    }

    _openDaumMap() {
        window.open('http://dmaps.kr/5uz5e');
    }

    render() {
        return (
            <div className="Where bottomBorder sidePadding">
                <h1>여기에서 뵈어요</h1>
                <div className="Ribbon">
                    <img src="/image/invi_ic_ribbon@2x.jpg" alt="ribbon"/>
                </div>
                <h3 className="Event-time">9월 9일 토요일 저녁 6시</h3>
                <h3>더 스카이팜</h3>
                <p className="Contents">
                    서울특별시 영등포구 여의대로 24<br/>
                    전경련회관 50층<br/>
                    02-2055-4440<br/>
                    주차가능(지하주차장)
                </p>
                <div className="Map-container">
                    <img width="100%" src="image/invi_img_map@2x.jpg" alt="map" />
                    <div className="Map-buttons">
                        <li>
                            <ul className="Naver">
                                <button onClick={this._openNaverMap.bind(this)}>네이버지도 열기</button>
                            </ul>
                            <ul className="Kakao">
                                <button onClick={this._openDaumMap.bind(this)}>카카오지도 열기</button>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Where
