import axios from 'axios';
import { Toast } from 'antd-mobile';

const domain = 'http://localhost:3333';

axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

axios.interceptors.response.use((response) => response.data, () => {
  Toast.show('Service failer');
});

// get resources from server
export const get = (url) => axios.get(url);

// add resources to server
export const post = (url, params) => axios.post(url, params);

// update resources in server
export const put = (url, params) => axios.put(url, params);

// delete resources in server
export const del = (url, params) => axios.del(url, params);

export const patch = (url, params) => axios.patch(url, params);
