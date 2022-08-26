/*
 * @Description: 首页
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-26 18:32:55
 * @LastEditTime: 2022-08-26 18:41:46
 */
import { useState } from 'react'
import './index.scss'

export default () => {
  return (
    <div className='home'>
      <SideBar />
      <Content />
    </div>
  )
}