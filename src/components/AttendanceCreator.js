/**
 * Created by masher on 8/3/17.
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import './AttendanceCreator.css';

class AttendanceCreator extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            accompanies: []
        };
    }

    title() {
        if (this.props.side === "bride") {
            return "신부쪽"
        } else {
            return "신랑쪽"
        }
    }

    _onNameChanged(e) {
        this.setState({
            name: e.target.value
        });
    }

    _onSubmitClicked() {
        if (this.state.name.length === 0) {
            return;
        }
        this._pushAttendance();
    }

    _pushAttendance() {
        const guestBookRef = firebase.database().ref().child('attendance');
        let filteredAccompanies = this.state.accompanies.filter((acc) => {
            return acc.length > 0
        });

        let attendaces = this.state.name;
        filteredAccompanies.map((acc) => {
            attendaces += ", " + acc;
        });

        alert(this.title() + " 하객으로 \"" + attendaces + "\" 참석합니다!");
        guestBookRef.push({
            side: this.props.side,
            name: this.state.name,
            number: filteredAccompanies.length + 1,
            accompanies: filteredAccompanies
        }, () => {
            this.props.onClose();
        });
    }

    _onAddAttendance() {
        let accompanies = this.state.accompanies;
        accompanies.push("");
        this.setState({
            accompanies: accompanies
        });
    }

    _onAccompanyChanged(i, e) {
        let accompanies = this.state.accompanies;
        accompanies[i] = e.target.value;
        this.setState({
            accompanies: accompanies
        });
    }

    render() {
        return (
            <div className="AttendanceCreator">
                <h1>네, 참석합니다!</h1>
                <p>
                    참석여부 <strong>꼭!</strong> 알려주세요<br/>
                    예식은 지정석으로 진행되어요
                </p>
                <li>
                    <ul>
                        <input placeholder="이름을 남겨주세요"
                               type="text"
                               name="name"
                               value={ this.state.name }
                               onChange={ this._onNameChanged.bind(this) }
                        />
                    </ul>
                    {
                        this.state.accompanies.map((acc, i) => {
                            return (
                                <ul key={ i }>
                                    <input placeholder="동행인의 이름을 남겨주세요"
                                           type="text"
                                           name={ 'accompanies' + i }
                                           value={ this.state.accompanies[i] }
                                           onChange={ this._onAccompanyChanged.bind(this, i) }
                                    />
                                </ul>
                            )
                        })
                    }
                    <ul>
                        <button onClick={ this._onAddAttendance.bind(this) }>+ 동행인 추가</button>
                    </ul>
                </li>
                <div className="OKButton">
                    <button onClick={ this._onSubmitClicked.bind(this) }>확인</button>
                </div>
            </div>
        );
    }
}

AttendanceCreator.defaultProps = {
    side: "bride",
    onClose: () => {}
};

export default AttendanceCreator
