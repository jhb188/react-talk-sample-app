import React from 'react';

const style = {
    container: {
        padding: 40,
    },
    email: {
        fontWeight: 'bold',
    },
};

const EmailList = ({ emails }) => {
    return (
        <div style={ style.container }>
            {
                emails.map((email) => (
                    <div style={ style.email }>
                        { email }
                    </div>
                ))
            }
        </div>
    );
};

export default EmailList;
