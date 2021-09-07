import React, { useEffect } from 'react';
import MobileViewWrapper from '../../components/MobileViewWrapper';
import fetchData from '../../utils/fetchData';
import { getToken } from '../../utils/auth';

const HelloWorld = () => {
  useEffect(() => {
    const requestHelloWorld = async () => {
      const token = getToken();
      const res = await fetchData({
        headers: {
          Authorization: `Bearer ${token}`
        },
        url: `${process.env.REACT_APP_BASE_API}/api/hello-world`,
        method: 'GET'
      });
      console.log(res);
    };

    requestHelloWorld();
  });
  return (
    <MobileViewWrapper>
      <h1>Hello World</h1>
    </MobileViewWrapper>
  );
};

export default HelloWorld;
