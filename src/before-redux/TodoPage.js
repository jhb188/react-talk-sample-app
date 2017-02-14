import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

export default class TodoPage extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
        };
    }

    createTodo = (description) => {
        this.setState({
            todos: [ ...this.state.todos, { description, checked: false } ],
        });
    }

    toggleChecked = (index) => {
        const newTodos = this.state.todos.map((todo, idx) => {
            return idx === index
                ? Object.assign({}, todo, { checked: !todo.checked  })
                : todo;
        });

        this.setState({
            todos: newTodos,
        });
    }

    render = () => {
        return (
            <div>
                <h1>My Todos</h1>

                <NewTodo createTodo={ this.createTodo } />

                <TodoList
                    todos={ this.state.todos }
                    toggleChecked={ this.toggleChecked } />
            </div>
        )
    }
}
