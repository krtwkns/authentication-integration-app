import React from 'react';
import LoginContainer from './index';
import { render } from '@testing-library/react';

describe('Login Container', () => {
  it('should render username input', function() {
    const { getByTestId } = render(<LoginContainer />);
    expect(getByTestId('username-input')).toBeInTheDocument();
  });
  it('should render password input', function() {
    const { getAllByTestId } = render(<LoginContainer />);
    expect(getAllByTestId('password-input')).toHaveLength(1);
  });
  it('should render button submit', function() {
    const { getByRole } = render(<LoginContainer />);
    expect(getByRole('button')).toBeInTheDocument();
  });
});
