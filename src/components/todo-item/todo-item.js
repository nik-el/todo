import React from "react";
import ReactDOM from 'react-dom'
import './todo-item.css';

export default class TodoItem extends React.Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false
        };

        this.onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                }
            });
        };

        this.setMarkImportant = () => {
            this.setState(({important}) => {
                return {
                    important: !important
                }
            });
        };
    }

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        console.log('done:', done);

        let classNames = 'todo-list-item' + (done ? ' done' : '') + (important ? ' important' : '');

        return (
            <div>
                <span
                    onClick={this.onLabelClick}
                    className={classNames}
                >
                    {label}
                </span>
                <button
                    className="btn btn-sm btn-outline-success pull-right"
                    onClick={this.setMarkImportant}
                >
                    <i className="fa fa-check"/>
                </button>
                <button
                    className="btn btn-sm btn-outline-danger pull-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash"/>
                </button>
            </div>
        );
    }
}
