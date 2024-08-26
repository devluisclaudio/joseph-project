import axios from 'axios';

const ia = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDzop80QZxc-8BdNWEqmGtG9DJWkExXySA',
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