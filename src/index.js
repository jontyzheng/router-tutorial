/*
 * @Author: jonty
 * @Date: 2022-02-16 22:23:46
 * @LastEditTime: 2022-02-22 21:47:40
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expense from './routes/expense';
import Invoice from './routes/invoice';
import SubInv from './routes/subInv';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='expense' element={<Expense />} />
        <Route path='invoice' element={<Invoice />} >

          <Route path=':invoiceId' element={<SubInv />} />  {/* :x 表示匹配参数 */}
        </Route>

        {/* this "no match" case */}
        <Route
          path='*'
          element={
            <main>
              <p>别看我我啥没有</p>
            </main>
          }>
          {/* 也写在 / 里面 */}
        </Route>
      </Route>
      {/* 母子关系 递进关系 */}
    </Routes>
  </BrowserRouter >,
  // 用路由将这个应用一整个包裹住
  document.getElementById('root')
);


