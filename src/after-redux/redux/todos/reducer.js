import { fromJS } from 'immutable';
import { CREATE_TODO } from '../todo/constants';
import { TOGGLE_CHECKED } from './constants';

const initialState = fromJS([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return state.push(action.todo);

        case TOGGLE_CHECKED: {
            const checkedPath = [action.index, 'checked'];

            return state.setIn(checkedPath, !state.getIn(checkedPath));
        }

        default:
            return state;
    }
}
