import React, { PropTypes } from 'react';
import TodoRecord from '../../../../records/Todo';

const Todo = ({ index, todo, toggleChecked }) => (
    <div>
        <input
            checked={ todo.get('checked') }
            onChange={ () => { toggleChecked(index) } }
            type="checkbox" />

        <span>
            { todo.get('description') }
        </span>
    </div>
);

Todo.propTypes = {
    todo: PropTypes.instanceOf(TodoRecord).isRequired,
}

export default Todo;
