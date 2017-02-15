import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';

import TodoRecord from '../../../../records/Todo';
import Todo from './index';

const toggleChecked = jest.fn();

const props = {
    index: 1,
    todo: TodoRecord(Map({ description: 'Hello World' })),
    toggleChecked,
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

it('should call toggleChecked on a change event', () => {
    expect(toggleChecked).not.toHaveBeenCalled();

    todo.find('input[type="checkbox"]').simulate('change');

    expect(toggleChecked).toHaveBeenCalled();
});
