import {
    CREATE_TODO,
    EDIT_TODO,
} from './constants';

export const createTodo = (todo) => ({
    todo,
    type: CREATE_TODO,
});

const editTodo = (field) => (value) => ({
    field,
    type: EDIT_TODO,
    value,
});

export const editDescription = editTodo('description');
