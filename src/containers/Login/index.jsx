import React from 'react';
import { Button, Form, Input } from 'antd';
import fetchData from '../../utils/fetchData';
import MobileViewWrapper from '../../components/MobileViewWrapper';

const Login = () => {
  const onFinish = async value => {
    const res = await fetchData({
      url: `${process.env.REACT_APP_BASE_API}/login`,
      method: 'POST',
      data: {
        username: value.username,
        password: value.password
      }
    });
    console.log(res);
  };
  return (
    <MobileViewWrapper>
      <h1>Login</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </Form.Item>
      </Form>
    </MobileViewWrapper>
  );
};

export default Login;
