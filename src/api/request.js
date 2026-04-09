import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true,
});

export default request;
