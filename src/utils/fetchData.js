import axios from 'axios';

const fetchData = ({ headers = {}, url, method = 'GET', data = {} }) =>
  axios({
    headers,
    url,
    method,
    data
  });

export default fetchData;
