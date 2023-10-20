import { post } from '@utils/request';

// eslint-disable-next-line import/prefer-default-export
export const registeUser = (params) => post('/api/accounts/signup', params);
