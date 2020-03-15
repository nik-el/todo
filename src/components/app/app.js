import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../../components/app-header/app-header'
import SearchPanel from '../../components/search-panel/search-panel'
import ItemStatusFilter from '../../components/item-status-filter/item-status-filter'
import TodoList from '../../components/todo-list/todo-list'



export default class extends Component {
    constructor() {
        super();

        this.state = {
            todoData: [
                {id: 1, label: 'Make Go'},
                {id: 2, label: 'Drink Coffee', important: true},
                {id: 3, label: 'Git status'}
            ]
        };

        this.onDeleted = (id) => {
            console.log('onDeleted:', id);
            this.setState(({ todoData}) => {
                return {
                    todoData: todoData.filter((item) => {
                        return item.id !== id;
                    })
                }
            })
        };
    }

    render() {
        const isLogged = true;
        const loginBox = <span>Log in please</span>;
        const welcomeBox = <span>Welcome</span>;

        return (
            <div>
                { isLogged ? welcomeBox : loginBox }
                <AppHeader />
                <SearchPanel />
                <ItemStatusFilter />
                <TodoList todos={this.state.todoData} onDeleted={this.onDeleted} />
            </div>
        );    }
}
