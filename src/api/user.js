import request from './request';

export const getThirdPartyUserInfo = () =>
  request.get('/api/user/third-party-info').then((res) => res.data);
