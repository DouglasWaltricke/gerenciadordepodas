import React from 'react';
import axios from 'axios';
import { AsyncStorage } from 'react-native'


const api = axios.create({
    baseURL: 'http:192.168.0.102:3333'
})


api.interceptors.request.use(async (config) => {
   
    if (
      !config.url.endsWith('login') ||
      !config.url.endsWith('refresh') ||
      !config.url.endsWith('signup')
    ) {
        const userToken = await AsyncStorage.getItem('@satc:token');
        config.headers.Authorization = `Bearer ${userToken}`;
    }
  
    return config;
  }, (error) => {
    return Promise.reject(error);
  }
);

export default api;