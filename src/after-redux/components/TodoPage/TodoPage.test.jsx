import React from 'react';
import { shallow } from 'enzyme';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import TodoPage from './index';

const todoPage = shallow(
    <TodoPage />
);

it('should render a NewTodo', () => {
    expect(todoPage.find(NewTodo).length).toEqual(1);
});

it('should render a TodoList', () => {
    expect(todoPage.find(TodoList).length).toEqual(1);
});
