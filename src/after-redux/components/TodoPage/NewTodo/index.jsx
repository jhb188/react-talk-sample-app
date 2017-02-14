import { connect } from 'react-redux';
import { createTodo, editDescription } from '../../../redux/todo/actions';
import NewTodo from './NewTodo';

export default connect(
    ({ todo }) => ({
        todo,
    }),
    {
        createTodo,
        editDescription,
    }
)(NewTodo);
