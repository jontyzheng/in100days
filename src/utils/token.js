/*
 * @Author: zjt
 * @Date: 2021-12-07 19:41:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-18 00:02:18
 * @Description: 认证工具类 
 * @FilePath: \in100days\src\utils\token.js
 */
export function getToken() {
    return localStorage.getItem('token')
}

export function setToken(token) {
    localStorage.setItem('token', token)
}


export function clearToken() {
    localStorage.removeItem('token')
}

export function isLogin() {
    // console.log('本地token是否为空');
    console.log(localStorage.getItem('token') === null);
    return (localStorage.getItem('token') !== null)
}