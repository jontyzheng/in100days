/*
 * @Author: jonty
 * @Date: 2022-02-15 20:00:38
 * @LastEditTime: 2022-02-24 21:40:40
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\App.js
 */
import React from 'react'
import logo from './logo.svg';
import './App.css';
import { menu } from './routes/menu'
import { useRoutes } from 'react-router-dom'

export default function App() {
  
  let element = useRoutes(menu)

  return (
    <div>
      {element}
    </div >
  );
}