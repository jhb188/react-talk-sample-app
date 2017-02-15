import React from 'react';

const EmailList = ({ emails }) => {
    return (
        <div>
            {
                emails.map((email) => (
                    <div>
                        { email }
                    </div>
                ))
            }
        </div>
    );
};

export default EmailList;
