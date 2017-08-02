/**
 * Created by masher on 6/10/17.
 */

import * as React from "react";

class GuestCreator extends React.Component {
    defaultState = {
        name: "",
        contents: "",
        namePlaceholder: "이름",
        contentsPlaceholder: "내용",
        buttonTitle: "Insert"
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
            <div>
              <p>
                <input type="text"
                       name="name"
                       placeholder={ this.state.namePlaceholder }
                       value={ this.state.name }
                       onChange={ this.handleChange.bind(this) }
                />
                <input type="text"
                       name="contents"
                       placeholder={ this.state.contentsPlaceholder }
                       value={ this.state.contents }
                       onChange={ this.handleChange.bind(this) }
                />
                <button onClick={ this.handleClick.bind(this) }>{ this.state.buttonTitle }</button>
              </p>
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
