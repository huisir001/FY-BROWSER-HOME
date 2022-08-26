/*
 * @Description: 入口
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-23 12:13:03
 * @LastEditTime: 2022-08-23 15:00:37
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
