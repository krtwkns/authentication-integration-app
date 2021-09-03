import React from 'react';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import MobileViewWrapper from '../../components/MobileViewWrapper';
import { removeAuth } from '../../utils/auth';

const Home = () => {
  const history = useHistory();
  const onClickLogout = () => {
    removeAuth();
    history.push('/login');
  };
  return (
    <MobileViewWrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Just Chat</h2>
        <Button onClick={onClickLogout}>Logout</Button>
      </div>
      <div>
        <Link to="/room">
          <Button type="primary">Try chat now!</Button>
        </Link>
      </div>
    </MobileViewWrapper>
  );
};

export default Home;
