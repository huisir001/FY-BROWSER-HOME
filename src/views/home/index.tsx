/*
 * @Description: 首页
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-26 18:32:55
 * @LastEditTime: 2022-08-29 12:37:22
 */
import { useState } from 'react'
import './index.scss'
import TopBar from './components/TopBar'
import Content from './components/Content'

export default () => (
  <div className='home'>
    <TopBar />
    <Content />
  </div>
)