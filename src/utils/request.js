/*
 * @Author: jonty
 * @Date: 2021-12-12 22:02:02
 * @LastEditTime: 2022-03-18 01:00:29
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\utils\request.js
 */
import axios from 'axios'
import { getToken } from './token'

const instance = axios.create({
    baseURL: "http://localhost:8081",
    timeout: 5000   // ms
})

export function get(url, params) {
    return instance.get(url, {
        params
    })
}

export function del(url) {
    return instance.delete(url)
}

export function put(url, data) {
    return instance.put(url, data)
}

export function post(url, data) {
    return instance.post(url, data)
}

/**
 * 请求拦截(全局)
 * 自定义请求增加的数据
 * 
*/
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent：get token and send it to the server-end
    config.headers['Authorization'] = 'Bearer ' + getToken()
    // console.log('------');
    // console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data：return data instead
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});