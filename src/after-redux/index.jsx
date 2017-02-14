import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import TodoPage from './components/TodoPage';

const store = createStore();

export default () => (
    <Provider store={ store }>
        <TodoPage />
    </Provider>
);
