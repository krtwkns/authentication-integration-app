import React, { useEffect, useState } from 'react';
import MobileViewWrapper from '../../components/MobileViewWrapper';
import fetchData from '../../utils/fetchData';
import { getToken } from '../../utils/auth';

const HelloWorld = () => {
  const [data, setData] = useState('Loading ...');
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
      setData(res?.data?.data);
    };
    requestHelloWorld();
  }, []);
  return (
    <MobileViewWrapper>
      <h1>{data}</h1>
    </MobileViewWrapper>
  );
};

export default HelloWorld;
