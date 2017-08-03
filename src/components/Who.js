/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import AttendanceCreator from "./AttendanceCreator";

class Who extends Component {
    constructor() {
        super();
        this.state = {
            isShowingModal: false,
            side: ""
        };
    }

    _attend(e) {
        this.setState({
            side: e.target.name,
            isShowingModal: true
        });
    }

    _close() {
        this.setState({
            isShowingModal: false,
            side: ""
        });
    };

    render() {
        return (
            <div>
                <h1>RSVP</h1>
                <button onClick={ this._attend.bind(this) } name="groom">신랑쪽</button>
                <button onClick={ this._attend.bind(this) } name="bride">신부쪽</button>
                {
                    this.state.isShowingModal &&
                    <ModalContainer onClose={ this._close.bind(this) } onTouchStart={ this._close.bind(this) }>
                        <ModalDialog onClose={ this._close.bind(this) }>
                            <AttendanceCreator side={ this.state.side } onClose={ this._close.bind(this) }/>
                        </ModalDialog>
                    </ModalContainer>
                }
            </div>
        );
    }
}

export default Who
