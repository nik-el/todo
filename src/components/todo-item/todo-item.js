import React from "react";
import ReactDOM from 'react-dom'
import './todo-item.css';

const TodoItem = (props) => {
    const { label, onDeleted, done, important, onToggleImportant, onToggleDone } = props;

    let classNames = 'todo-list-item' + (done ? ' done' : '') + (important ? ' important' : '');

    return (
        <div>
            <span
                onClick={onToggleDone}
                className={classNames}
            >
                {label}
            </span>
            <button
                className="btn btn-sm btn-outline-success pull-right"
                onClick={onToggleImportant}
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
};

export default TodoItem;
