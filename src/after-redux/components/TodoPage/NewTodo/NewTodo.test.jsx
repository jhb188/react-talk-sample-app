import React from 'react';
import { shallow } from 'enzyme';

import TodoRecord from '../../../records/Todo';
import NewTodo from './NewTodo';

const noop = Function.prototype;
const props = {
    createTodo: noop,
    editDescription: noop,
    todo: TodoRecord(),
};

const newTodo = shallow(
    <NewTodo { ...props } />
);

it('should render an input', () => {
    expect(newTodo.find('input').length).toEqual(1);
});

it('should render a button', () => {
    expect(newTodo.find('button').length).toEqual(1);
});
