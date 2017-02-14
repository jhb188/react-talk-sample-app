import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, toggleChecked }) => (
    <div>
        {
            todos.map((todo, index) => (
                <Todo
                    { ...{ index, todo } }
                    key={ `${index}-${todo}` }
                    toggleChecked={ toggleChecked } />
            ))
        }
    </div>
);

export default TodoList;
