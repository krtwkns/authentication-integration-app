import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useChat from './useChat';
import ChatMessage from '../ChatMessage';
import useTyping from './useTyping';
import NewMessageForm from '../NewMessageForm';
import TypingMessage from '../TypingMessage';
import Users from '../Users';
import UserAvatar from '../UserAvatar';

const ChatRoom = () => {
  const { roomId } = useParams();
  const {
    messages,
    user,
    users,
    typingUsers,
    sendMessage,
    startTypingMessage,
    stopTypingMessage
  } = useChat(roomId);
  const [newMessage, setNewMessage] = useState('');

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  const handleNewMessageChange = event => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = event => {
    event.preventDefault();
    cancelTyping();
    sendMessage(newMessage);
    setNewMessage('');
  };

  useEffect(() => {
    if (isTyping) startTypingMessage();
    else stopTypingMessage();
  }, [isTyping]);

  return (
    <div className="chat-room">
      <div className="chat-room-container">
        <div className="chat-room-top-bar">
          <h1 className="room-name">Room: {roomId}</h1>
          {user && <UserAvatar user={user}></UserAvatar>}
        </div>
        <Users users={users}></Users>
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li key={i}>
                <ChatMessage message={message}></ChatMessage>
              </li>
            ))}
            {typingUsers.map((user, i) => (
              <li key={messages.length + i}>
                <TypingMessage user={user}></TypingMessage>
              </li>
            ))}
          </ol>
        </div>
        <NewMessageForm
          newMessage={newMessage}
          handleNewMessageChange={handleNewMessageChange}
          handleStartTyping={startTyping}
          handleStopTyping={stopTyping}
          handleSendMessage={handleSendMessage}
        ></NewMessageForm>
      </div>
    </div>
  );
};

export default ChatRoom;
