/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

class Who extends Component {
    constructor() {
        super();
        this.state = { isShowingModal: false };
    }

    _attend() {
        this.setState({ isShowingModal: true });
    }

    _close() {
        this.setState({ isShowingModal: false });
    };

    render() {
        return (
            <div>
                <h1>RSVP</h1>
                <button onClick={ this._attend.bind(this) }>Attendance</button>
                {
                    this.state.isShowingModal &&
                    <ModalContainer onClose={ this._close.bind(this) } onTouchStart={ this._close.bind(this) }>
                        <ModalDialog onClose={ this._close.bind(this) }>
                            <h1>Dialog Content</h1>
                            <p>More Content. Anything goes here</p>
                        </ModalDialog>
                    </ModalContainer>
                }
            </div>
        );
    }
}

export default Who
