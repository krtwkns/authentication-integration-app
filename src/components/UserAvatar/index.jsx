import React from 'react';

const UserAvatar = ({ user }) => {
  return (
    <div className="user-avatar">
      <img
        src={user.picture}
        alt={user.name}
        title={user.name}
        className={'avatar'}
      ></img>
    </div>
  );
};

export default UserAvatar;
