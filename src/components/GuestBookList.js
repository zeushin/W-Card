/**
 * Created by masher on 8/05/17.
 */

import React, { Component } from 'react';
import './GuestBookList.css';

class GuestBookList extends Component {
    render() {
        return (
            <div className="GuestBookList">
                <table>
                    <tbody>
                    {
                        this.props.guests.map((user) => {
                            return (
                                <tr key={user.key}>
                                    <th>{user.name}</th>
                                    <td>{user.contents}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                 </table>
            </div>
        );
    }
}

GuestBookList.defaultProps = {
    guests: [{
        key: "",
        name: "",
        contents: ""
    }]
};

export default GuestBookList;
