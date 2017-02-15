import React, { Component } from 'react';
import Spinner from './Spinner';
import EmailList from './EmailList';

export default class Example extends Component {
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
