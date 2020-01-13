import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Wow']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>ToDo list</h1>
    );
};

const SearchPanel = () => {
    return (
        <input type="text" placeholder="search" />
    );
};

const App = () => {
    const isLogged = true;
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome</span>;

    return (
        <div>
            { isLogged ? welcomeBox : loginBox }
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));