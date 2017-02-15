import { connect } from 'react-redux';

import Example from './Example';
import { fetchEmailsFromServer } from '../../redux/todo/actions';

export default connect(
    ({ emails }) => ({
        emails: emails.get('data'),
        hasFetchedEmails: emails.get('hasFetched'),
        isFetchingEmails: emails.get('isFetching'),
    }),
    { fetchEmailsFromServer }
)(Example)
