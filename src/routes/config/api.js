/*
 * @Author: jonty
 * @Date: 2022-03-15 00:14:40
 * @LastEditTime: 2022-03-20 00:16:34
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\config\api.js
 */
const product = '/product'

export const productAPI = {
    query: `${product}` + '/query',
    createOrUpdate: `${product}` + '/createOrUpdate'
}