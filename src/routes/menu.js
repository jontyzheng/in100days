/*
 * @Author: jonty
 * @Date: 2022-02-23 22:11:34
 * @LastEditTime: 2022-02-23 22:49:38
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\menu.js
 */
// 一个文件可以定义任意个常量并导出
import { Product } from './product'
import { Invoice } from './invoice'
import { ILayout } from '../pages/iLayout'


export const menu = [
    {
        path: "/",
        element: <ILayout />,
        children: [
            {
                path: '/product',
                element: <Product />,
                title: '菜单一',
                index: true, // <Route index element={<Product />}>
            },
            {
                title: '发票菜单',
                path: '/invoice',
                element: <Invoice />
            },
            {
                title: 'NotFound',
                path: '*',
                element: (
                    <main>
                        <p>别看我我啥没有</p>
                    </main>
                )
            },
        ]
    }
]

