/*
 * @Author: jonty
 * @Date: 2022-03-15 00:14:10
 * @LastEditTime: 2022-03-17 23:44:38
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\aa\service.js
 */
import axios from 'axios';
import { productAPI } from '../config/api'

export const doQuery = () => {
    return axios.get(productAPI)
}