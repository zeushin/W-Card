/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import GuestCreator from "./GuestCreator";
import * as firebase from 'firebase';
import GuestBookList from "./GuestBookList";

class GuestBook extends Component {
    constructor() {
        super();
        this.state = {
            guests: []
        };
    }

    componentDidMount() {
        const query = firebase.database().ref().child('guestBook');

        query.on('value', snap => {
            let guests = [];
            snap.forEach((child) => {
                let guest = child.val();
                guests.unshift({
                    key: child.key,
                    name: guest.name,
                    contents: guest.contents
                });
            });
            this.setState({ guests: guests });
        });
    }

    static _insertToFirebase(name, contents) {
        const guestBookRef = firebase.database().ref().child('guestBook');
        guestBookRef.push({
            name: name,
            contents: contents
        });
    }

    render() {
        return (
            <div>
                <h1>방명록</h1>
                <GuestCreator onInsert={GuestBook._insertToFirebase.bind(this)} />
                <GuestBookList guests={this.state.guests} />
            </div>
        );
    }
}

export default GuestBook
