import React, { Component } from 'react';

class NewTodo extends Component {
    createThisTodo = () => {
        const val = this.todoInput.value;

        this.props.createTodo(val);
        this.todoInput.value = '';
    }

    render = () => (
        <div>
            <input ref={ c => this.todoInput = c } type="text" />

            <button onClick={ this.createThisTodo }>Add Todo</button>
        </div>
    );
}

export default NewTodo;
