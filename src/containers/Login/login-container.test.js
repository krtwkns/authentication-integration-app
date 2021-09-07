import React from 'react';
import { shallow } from 'enzyme';
import LoginContainer from './index';
import { Input } from 'antd';

describe('Login Container', () => {
  const wrapper = shallow(<LoginContainer />);
  it('should render my component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input Component is 1', function() {
    expect(wrapper.find(Input).length).toBe(1);
  });
  it('should render Input.Password Component is 1', function() {
    expect(wrapper.find(Input.Password).length).toBe(1);
  });
});
