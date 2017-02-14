import { applyMiddleware, combineReducers, createStore } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import todo from './todo/reducer';
import todos from './todos/reducer';

export default (initialState = {}) => createStore(
    combineReducers({
        todo,
        todos,
    }),
    initialState,
    applyMiddleware(
        createLogger({
            stateTransformer: (state) => {
                const newState = {};

                for (const i of Object.keys(state)) {
                    if (Immutable.Iterable.isIterable(state[i])) {
                        newState[i] = state[i].toJS();
                    } else {
                        newState[i] = state[i];
                    }
                }

                return newState;
            },
        })
    )
);
