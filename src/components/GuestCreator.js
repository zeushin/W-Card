/**
 * Created by masher on 6/10/17.
 */

import * as React from 'react';
import './GuestCreator.css';

class GuestCreator extends React.Component {
    defaultState = {
        name: "",
        contents: ""
    };

    constructor() {
        super();
        this.state = this.defaultState
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.guest.name,
            contents: nextProps.guest.contents
        });
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick() {
        if (this.state.name.length === 0 || this.state.contents.length === 0) {
            return;
        }
        this.props.onInsert(this.state.name, this.state.contents);
        this.setState(this.defaultState);
    }

    render() {
        return (
            <div className="GuestCreator">
                <input type="text"
                       name="name"
                       placeholder="이름을 남겨주세요"
                       value={ this.state.name }
                       onChange={ this.handleChange.bind(this) }
                />
                <textarea type="text"
                          name="contents"
                          placeholder="메시지를 남겨주세요"
                          rows="4"
                          value={ this.state.contents }
                          onChange={ this.handleChange.bind(this) }
                />
                <button onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

GuestCreator.defaultProps = {
    guest: {
        name: "",
        contents: ""
    },
    onInsert: () => {}
};

export default GuestCreator
