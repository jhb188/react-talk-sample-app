import React, { PropTypes } from 'react';
import TodoRecord from '../../../records/Todo';

const NewTodo = ({ createTodo, editDescription, todo }) => (
    <div>
        <input
            onChange={ (e) => editDescription(e.target.value) }
            type="text"
            value={ todo.get('description', '') } />

        <button onClick={ () => createTodo(todo) }>
            Add Todo
        </button>
    </div>
);

NewTodo.propTypes = {
    todo: PropTypes.instanceOf(TodoRecord).isRequired,
}

export default NewTodo;
