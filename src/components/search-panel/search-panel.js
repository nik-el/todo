import React, {Component} from "react";
import ReactDOM from 'react-dom';

import './search-panel.css';


export default class SearchPanel extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.onChange = (event) => {
            const value = event.target.value;
            this.props.onSearch(value);
            this.setState({
                value: value
            })
        }
    }

    render() {
        return <input
            type="text"
            placeholder="Whats need?"
            className="search-panel"
            onChange={this.onChange}
            value={this.state.value}
        />;
    }

}
