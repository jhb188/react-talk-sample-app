import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEmailsFromServer } from '../../redux/todo/actions';
import Spinner from './Spinner';
import EmailList from './EmailList';

class Container extends Component {
    componentDidMount = () => {
        if (!this.props.hasFetchedEmails) {
            this.props.fetchEmailsFromServer();
        }
    }

    render() {
        if (this.props.isFetchingEmails) {
            return (
                <Spinner />
            );
        }

        return (
            <EmailList emails={ this.props.emails } />
        );
    }
}

export default connect(
    ({ emails }) => ({
        emails: emails.get('data'),
        hasFetchedEmails: emails.get('hasFetched'),
        isFetchingEmails: emails.get('isFetching'),
    }),
    { fetchEmailsFromServer }
)(Container)
