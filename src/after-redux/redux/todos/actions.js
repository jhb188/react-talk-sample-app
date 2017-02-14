import { TOGGLE_CHECKED } from './constants';

export const toggleChecked = (index) => ({
    index,
    type: TOGGLE_CHECKED,
});
