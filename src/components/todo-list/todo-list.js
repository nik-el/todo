import React from "react";
import ReactDOM from 'react-dom'
import './todo-list.css';

import TodoItem from '../todo-item/todo-item'

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {
       return (
           <li key={item.id} className="list-group-item">
               <TodoItem {...item} onDeleted={() => onDeleted(item.id)} />
           </li>
       )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
