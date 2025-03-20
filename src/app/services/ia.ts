import axios from 'axios';

const ia = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCMyB2ks_Lh1S5h__NQRBF0LpFsOAibrqU',
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

export default ia; 
