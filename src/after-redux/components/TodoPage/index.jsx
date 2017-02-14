import React from 'react';

import NewTodo from './NewTodo';
import TodoList from './TodoList';

const TodoPage = () => (
    <div>
        <h1>Redux is Cool</h1>
        <NewTodo />
        <TodoList />
    </div>
);

export default TodoPage;
