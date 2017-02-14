import { fromJS } from 'immutable';
import Todo from '../../records/Todo';
import {
    CREATE_TODO,
    EDIT_TODO,
} from './constants';

const initialState = Todo(fromJS({}));

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return initialState;

        case EDIT_TODO:
            return state.set(action.field, action.value);

        default:
            return state;
    }
}
