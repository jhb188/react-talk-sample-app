import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render = () => {
        return (
            <div>
                {
                    this.props.todos.map((todo, index) => (
                        <Todo
                            { ...todo }
                            index={ index }
                            key={ `${index}-${todo.description}` }
                            toggleChecked={ this.props.toggleChecked } />
                    ))
                }
            </div>
        );
    }
}

export default TodoList;
