import request from './request';

export const getServerStatus = () =>
  request.get('/api/server/status').then((res) => res.data);

export const startServer = ({ loader = 'vanilla', versionId, minMemory, maxMemory }) =>
  request.post('/api/server/start', { loader, versionId, minMemory, maxMemory }).then((res) => res.data);

export const stopServer = () =>
  request.post('/api/server/stop').then((res) => res.data);
