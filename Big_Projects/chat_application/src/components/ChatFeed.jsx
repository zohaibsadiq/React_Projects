import React, { useState, useEffect } from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = ({ chats, activeChat, userName, messages, creds }) => {
  const [localMessages, setLocalMessages] = useState(messages);
  const chat = chats && chats[activeChat];

  useEffect(() => {
    setLocalMessages(messages);
  }, [messages]);

  const handleNewMessage = (newMessage) => {
    setLocalMessages((prevMessages) => ({
      ...prevMessages,
      [newMessage.id]: newMessage,
    }));
  };

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) =>
      person.last_read === message.id ? (
        <div
          key={`read_${index}`}
          className='read-receipt'
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage:
              person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ) : null
    );
  };

  const renderMessages = () => {
    const keys = Object.keys(localMessages);

    return keys.map((key, index) => {
      const message = localMessages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={localMessages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className='read-receipts'
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px',
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return 'Loading...';

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat?.title}</div>
        <div className='chat-subtitle'>
          {chat.people.map((person) => `${person.person.username}`).join(', ')}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className='message-form-container'>
        <MessageForm
          chatId={activeChat}
          creds={creds}
          onNewMessage={handleNewMessage}
        />
      </div>
    </div>
  );
};

export default ChatFeed;
