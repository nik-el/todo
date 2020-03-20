import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './item-add-from.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onLabelChange = (event) => {
            this.setState({
                label: event.target.value
            });
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onAdd(this.state.label);
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form
                className="item-add-from d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder='Whats need to be done'
                    value={this.state.label}
                />
                <button className="btn btn-block btn-outline-success">Add Item</button>
            </form>
        )
    }
};
