/*
 * @Author: jonty
 * @Date: 2022-03-15 00:14:10
 * @LastEditTime: 2022-03-20 00:15:58
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\page1\service.js
 */
import { post, } from '../../utils/request'
import { productAPI } from '../config/api'

export const doQuery = (params) => {
    return post(productAPI.query, params)
}

export const doCreateOrUpdate = (params) => {
    return post(productAPI.createOrUpdate, params)
}
