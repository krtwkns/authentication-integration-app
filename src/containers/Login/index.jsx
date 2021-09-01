import React from 'react';
import { Button, Form, Input } from 'antd';
import MobileViewWrapper from '../../components/MobileViewWrapper';

const Login = () => {
  return (
    <MobileViewWrapper>
      <h1>Login</h1>
      <Form>
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
