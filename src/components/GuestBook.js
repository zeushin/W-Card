/**
 * Created by masher on 7/30/17.
 */

import React, { Component } from 'react';
import GuestCreator from "./GuestCreator";
import * as firebase from 'firebase';

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
                <h2>GuestBook</h2>
                <GuestCreator onInsert={GuestBook._insertToFirebase.bind(this)} />
                <ul>
                    {
                        this.state.guests.map((user) => {
                            return (<li key={user.key}>{user.name} | {user.contents}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default GuestBook
