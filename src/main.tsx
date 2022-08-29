/*
 * @Description: 入口
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-23 12:13:03
 * @LastEditTime: 2022-08-29 12:56:01
 */
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './assets/styles/index.scss'


// ReactDOM.render is no longer supported in React 18. Use `createRoot()` instead.
// The following words are no longer available:
// import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
  .render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )