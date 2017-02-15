import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';

import TodoRecord from '../../../../records/Todo';
import Todo from './index';

const props = {
    index: 1,
    todo: TodoRecord(Map({ description: 'Hello World' })),
    toggleChecked: Function.prototype,
};

const todo = shallow(
    <Todo { ...props } />
);

it('should render an input', () => {
    expect(todo.find('input').length).toEqual(1);
});

it('should render text', () => {
    expect(todo.text()).toEqual('Hello World');
});
