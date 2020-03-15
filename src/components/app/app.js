import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../../components/app-header/app-header'
import SearchPanel from '../../components/search-panel/search-panel'
import ItemStatusFilter from '../../components/item-status-filter/item-status-filter'
import TodoList from '../../components/todo-list/todo-list'
import ItemAddForm from '../../components/item-add-from/item-add-from'

export default class extends Component {
    constructor() {
        super();

        this.maxId = 100;

        this.createTodoItem = (label) => {
            return {
                label,
                id: this.maxId++,
                important: false,
                done: false
            }

        };

        this.state = {
            todoData: [
                this.createTodoItem('Make Go'),
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Git status')
            ]
        };

        this.onAdd = (text) => {
            const newItem = this.createTodoItem(text);
            this.setState(({ todoData}) => {
                const newTodo = [...todoData, newItem];
                return {
                    todoData: newTodo
                }
            })
        };

        this.onDeleted = (id) => {
            this.setState(({ todoData}) => {
                return {
                    todoData: todoData.filter((item) => {
                        return item.id !== id;
                    })
                }
            })
        };

        this.onToggleProp = (array, id, propName) => {
            const idx = array.findIndex(el => el.id === id);
            const oldItem = array[idx];
            const newItem = {
                ...oldItem,
                [propName]: !oldItem[propName]
            };

            return [
                ...array.slice(0, idx),
                newItem,
                ...array.slice(idx + 1)
            ];
        };

        this.onToggleDone = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.onToggleProp(todoData, id, 'done')
                }
            });
        };

        this.onToggleImportant = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.onToggleProp(todoData, id, 'important')
                }
            });
        }
    }

    render() {
        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <ItemStatusFilter />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.onDeleted}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onAdd={this.onAdd} />
            </div>
        );
    }

}
