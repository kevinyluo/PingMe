import React from 'react';

function MyMessage({ message }) {
    if(message?.attachments?.length > 0){
        return (
            <img
                src={message.attachements[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }

    return (
        <div className="message" style->
            MyMessage
        </div>
    );
}

export default MyMessage;