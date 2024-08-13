import axios from 'axios';

const ia = axios.create({
  baseURL: 'https://stec.cx',
  timeout: 100000, 
});

ia.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ia