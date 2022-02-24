/*
 * @Author: jonty
 * @Date: 2022-02-23 22:11:34
 * @LastEditTime: 2022-02-24 23:12:56
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\menu.js
 */
// 一个文件可以定义任意个常量并导出
import { Product } from './product'
import { Invoice } from './invoice'
import { NotFound } from './notFound'
import { ILayout } from '../pages/iLayout'


export const menu = [
    {
        path: "/",
        element: <ILayout />,
        children: [
            {
                path: 'product',
                element: <Product />,
                title: '菜单一',
                // index: true, // <Route index element={<Product />}>
            },
            {
                title: '发票菜单',
                path: 'invoice',
                element: <Invoice />
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

