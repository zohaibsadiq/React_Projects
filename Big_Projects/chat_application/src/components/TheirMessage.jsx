import React from 'react';

const TheirMessage = ({ message, lastMessage }) => {
  // Determine if this is the first message by the user in the current block of messages
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className='message-row'>
      {isFirstMessageByUser && message.sender && (
        <div
          className='message-avatar'
          style={{
            backgroundImage: `url(${message.sender.avatar})`,
          }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt='message-attachment'
          className='message-image'
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div
          className='message'
          style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
            padding: '10px', // Added padding for better spacing
            borderRadius: '8px', // Rounded corners for a nicer UI
            maxWidth: '75%', // Limiting the width to avoid overflow
            wordBreak: 'break-word', // Ensure long words or URLs break correctly
          }}
        >
          {message.text || 'No content available'} {/* Handle empty text */}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
