import axios from 'axios';
import config from '../config';

const request = axios.create({
  baseURL: config.apiBaseURL,
  timeout: config.timeout,
  withCredentials: config.withCredentials,
});

export default request;
