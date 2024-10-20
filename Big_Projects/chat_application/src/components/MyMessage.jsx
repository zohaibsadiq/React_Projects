import React, { useEffect } from 'react';

const MyMessage = ({ message }) => {
  // Log when the message prop changes
  useEffect(() => {
    console.log('Message prop changed:', message);
  }, [message]); // Depend on message prop

  // Check if there are attachments and render the first one if present
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt='message-attachment'
        className='message-image'
        style={{ float: 'right' }}
      />
    );
  }

  // Render the text message if no attachments
  return (
    <div
      className='message'
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: '#3B2A50',
        padding: '10px', // Adding padding for better spacing
        borderRadius: '8px', // Rounded corners for a nicer UI
        maxWidth: '75%', // Limiting the width to avoid overflow
        wordBreak: 'break-word', // Ensure long words or URLs break correctly
      }}
    >
      {message.text || 'No content available'}{' '}
      {/* Handling possible empty messages */}
    </div>
  );
};

export default MyMessage;
