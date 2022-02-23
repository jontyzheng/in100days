/*
 * @Author: jonty
 * @Date: 2022-02-15 20:00:38
 * @LastEditTime: 2022-02-23 23:00:47
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\App.js
 */
import React from 'react'
import logo from './logo.svg';
import './App.css';
import { ILayout } from './pages/iLayout'
import { menu } from './routes/menu'
import { useRoutes } from 'react-router-dom'
import { Product } from './routes/product'
import { Invoice } from './routes/invoice'
import { RouteObject } from "react-router-dom"

export default function App() {
  let menu = [
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
  let element = useRoutes(menu)

  return (
    <div>
      {element}
    </div >
  );
}