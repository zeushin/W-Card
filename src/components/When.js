/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import './When.css';

class When extends Component {
    render() {
        return (
            <div className="When bottomBorder">
                <h1>저희 둘 결혼해요</h1>
                <div className="Ribbon">
                    <img src="/image/invi_ic_ribbon@2x.jpg" alt="ribbon"/>
                </div>
                <p className="Parents">
                    <strong>신태현</strong> <span role="img" aria-label="Dot">・ </span> <strong>박경애</strong> 의 장남 <strong>신범철</strong>
                </p>
                <p className="Parents">
                    <strong>유재원</strong> <span role="img" aria-label="Dot">・ </span> <strong>김은숙</strong> 의 장녀 <strong>유선영</strong>
                </p>
                <p className="Contents">
                    오랜시간동안 옆자리에 앉아서<br/>
                    투닥투닥 협업하던 저희 둘이<br/>
                    콩닥콩닥 설레이는 결혼을 하게 되었습니다.<br/>
                    부디 참석해주셔서,<br/>
                    저희의 첫걸음을 축하해주세요.
                </p>
            </div>
        );
    }
}

export default When
