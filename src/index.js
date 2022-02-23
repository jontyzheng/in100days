/*
 * @Author: jonty
 * @Date: 2022-02-15 20:00:38
 * @LastEditTime: 2022-02-23 23:00:54
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter> {/* still need */}
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
