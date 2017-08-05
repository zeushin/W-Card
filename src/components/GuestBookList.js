/**
 * Created by masher on 8/05/17.
 */

import React, { Component } from 'react';

class GuestBookList extends Component {
    render() {
        let _tableStyle = {
            margin: 'auto'
        };

        return (
            <div>
                <table style={_tableStyle}>
                    <tbody>
                    {
                        this.props.guests.map((user) => {
                            return (
                                <tr key={user.key}>
                                    <td>{user.name}</td>
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
