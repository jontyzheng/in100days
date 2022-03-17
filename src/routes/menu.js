/*
 * @Author: jonty
 * @Date: 2022-02-23 22:11:34
 * @LastEditTime: 2022-03-18 01:20:31
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\menu.js
 */
// 一个文件可以定义任意个常量并导出
import { Product } from './product/index'
import { Invoice } from './invoice/index'
import { NotFound } from './notFound'
import { Page1 } from './page1/index'
import { ILayout } from '../pages/iLayout'

export const menu = [
    {
        path: "/",
        element: <ILayout />,
        children: [
            {
                title: '发票菜单',
                path: 'invoice',
                element: <Invoice />
            },
            {
                path: 'product',
                element: <Product />,
                title: '菜单一',
                // index: true, // <Route index element={<Product />}>
            },
            {
                path: 'page1',
                element: <Page1 />,
                title: '页面',
            },
            
            {
                title: 'NotFound',
                path: "*",
                element: <NotFound />
            },
        ]
    },
    // 相对主页的
    {
        title: 'NotFound',
        path: "*",
        element: (
            <main>看样子你走丢了（404）</main>
        )
    },
]

