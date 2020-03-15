import React from "react";
import ReactDOM from "react-dom";

export default class ItemStatusFilter extends React.Component {
    render() {
        return (
            <div className="item-status-filter btn-group">
                <button className="btn btn-sm btn-info">
                    All
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                    Active
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                    Done
                </button>
            </div>
        )
    }
};