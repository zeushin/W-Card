/**
 * Created by masher on 8/3/17.
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';

class AttendanceCreator extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            number: 1,
            attend: true,
            absent: false
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

    _onNumberChanged(e) {
        this.setState({
            number: e.target.value
        });
    }

    _onAttendChanged() {
        this.setState({
            attend: true,
            absent: false
        });
    }

    _onAbsentChanged() {
        this.setState({
            attend: false,
            absent: true
        });
    }

    _onSubmitClicked() {
        if (this.state.name.length === 0 || this.state.number <= 0) {
            return;
        }
        this._pushAttendance();
    }

    _pushAttendance() {
        const guestBookRef = firebase.database().ref().child('attendance');
        guestBookRef.push({
            side: this.props.side,
            name: this.state.name,
            number: this.state.number,
            isAttend: this.state.attend
        }, () => {
            this.props.onClose();
        });
    }

    render() {
        return (
            <div>
                <h1>{ this.title() }</h1>
                <div>
                    <label>이름</label>
                    <input type="text"
                           name="name"
                           placeholder="이름"
                           value={ this.state.name }
                           onChange={ this._onNameChanged.bind(this) }
                    />
                </div>
                <div>
                    <label>참석인원</label>
                    <input type="number"
                           name="number"
                           placeholder="참석인원"
                           value={ this.state.number }
                           onChange={ this._onNumberChanged.bind(this) }
                           pattern="\d*"
                    />
                </div>
                <div>
                    <input id="attend"
                           type="radio"
                           checked={ this.state.attend }
                           onChange={ this._onAttendChanged.bind(this) }
                    />
                    <label htmlFor="attend">참석합니다</label>
                </div>
                <div>
                    <input id="absent"
                           type="radio"
                           checked={ this.state.absent }
                           onChange={ this._onAbsentChanged.bind(this) }
                    />
                    <label htmlFor="absent">불참</label>
                </div>
                <div>
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
