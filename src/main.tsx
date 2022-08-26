/*
 * @Description: 入口
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-23 12:13:03
 * @LastEditTime: 2022-08-26 18:01:51
 */
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
