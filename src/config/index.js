const config = {
apiBaseURL: process.env.REACT_APP_API_BASE || 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true,
};

export default config;
