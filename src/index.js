/*
 * @Author: jonty
 * @Date: 2022-02-16 22:23:46
 * @LastEditTime: 2022-02-16 22:29:59
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // 用路由将这个应用一整个包裹住
  document.getElementById('root')
);


