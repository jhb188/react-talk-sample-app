import { connect } from 'react-redux';

import { toggleChecked } from '../../../redux/todos/actions';
import TodoList from './TodoList';

export default connect(
    ({ todos }) => ({ todos }),
    { toggleChecked }
)(TodoList);
