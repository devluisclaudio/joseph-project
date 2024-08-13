import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.josephproject.com.br:3001/',
  timeout: 10000, 
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;