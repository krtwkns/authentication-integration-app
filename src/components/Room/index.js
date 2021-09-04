import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

const Room = () => {
  const [roomName, setRoomName] = useState('');

  const handleRoomNameChange = event => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <h1>Write your room to start chat</h1>
      <Input type={'large'} value={roomName} onChange={handleRoomNameChange} />
      <div
        style={{
          marginTop: '1em',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Link to={`chat/${roomName}`}>
          <Button type="primary">Join Room!</Button>
        </Link>
      </div>
    </div>
  );
};

export default Room;
