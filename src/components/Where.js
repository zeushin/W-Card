/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import './Where.css';
import AddToCalendar from 'react-add-to-calendar';

class Where extends Component {
    _openNaverMap() {
        window.open('http://naver.me/Gkuaunj4');
    }

    _openDaumMap() {
        window.open('http://dmaps.kr/5uz5e');
    }

    render() {
        let mapImageUrl = 'https://firebasestorage.googleapis.com/v0/b/w-card-ce9f3.appspot.com/o/invi_img_map%402x.jpg?alt=media&token=f19710f1-c861-481f-999b-6ef8408136c9';
        let event = {
            title: '춀딱써니 결혼해요',
            description: '선영&범철의 결혼식을 축하해 주세요!',
            location: '서울 영등포구 여의대로 24 전경련타워 50층 더스카이팜',
            startTime: '2017-09-09T18:00:00+09:00',
            endTime: '2017-09-09T20:00:00+09:00'
        };
        let listItems = [{ apple: '애플 캘린더에 일정 추가하기' }, { google: '구글 캘린더에 일정 추가하기' }];

        return (
            <div className="Where bottomBorder sidePadding">
                <h1>여기에서 뵈어요</h1>
                <div className="Ribbon">
                    <img src="/image/invi_ic_ribbon@2x.jpg" alt="ribbon"/>
                </div>
                    <h3 className="Event-time">
                        <AddToCalendar event={ event }
                                       buttonLabel="9월 9일 토요일 저녁 6시"
                                       displayItemIcons="false"
                                       listItems={ listItems }/>
                    </h3>
                <h3>더 스카이팜</h3>
                <p className="Contents">
                    서울특별시 영등포구 여의대로 24<br/>
                    전경련회관 50층<br/>
                    02-2055-4440<br/>
                    주차가능(지하주차장)
                </p>
                <div className="Map-container">
                    <img width="100%" src={ mapImageUrl } alt="map" />
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
