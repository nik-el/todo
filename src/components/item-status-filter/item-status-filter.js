import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class ItemStatusFilter extends Component {
    constructor() {
        super();

        this.onStatusChange = (value) => {
            this.setState({
                status: value
            });
            this.props.onSelectStatus(value);
        };

        this.state = {
            status: ''
        }
    }

    render() {
        return (
            <div className="item-status-filter btn-group">
                <button
                    className={'btn btn-sm ' + (!this.state.status ? 'btn-info' : 'btn-outline-info')}
                    onClick={() => {this.onStatusChange('')}}
                >
                    All
                </button>
                <button
                    className={'btn btn-sm ' + (this.state.status === 'active' ? 'btn-secondary' : 'btn-outline-secondary')}
                    onClick={() =>{this.onStatusChange('active')}}
                >
                    Active
                </button>
                <button
                    className={'btn btn-sm ' + (this.state.status === 'done' ? 'btn-secondary' : 'btn-outline-secondary')}
                    onClick={() => {this.onStatusChange('done')}}
                >
                    Done
                </button>
            </div>
        )
    }
};
