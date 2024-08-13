import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.josephproject.com.br/',
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