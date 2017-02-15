import React from 'react';
import { shallow } from 'enzyme';
import { List, Map } from 'immutable';

import TodoRecord from '../../../records/Todo';
import Todo from './Todo';
import TodoList from './TodoList';

const props = {
    todos: List(
        TodoRecord(),
        TodoRecord()
    ),
    toggleChecked: Function.prototype,
};

const todoList = shallow(
    <TodoList { ...props } />
);

it('should render a Todo', () => {
    expect(todoList.find(Todo).length).toEqual(2);
});
