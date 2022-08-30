/*
 * @Description: 首页
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-26 18:32:55
 * @LastEditTime: 2022-08-30 12:35:15
 */
import { useState } from 'react'
import './index.scss'
import TopBar from './components/TopBar'
import Content from './components/Content'

export default () => {
  const [focus, setFocus] = useState(false)
  const handleFocus = (isFocus: boolean) => {
    setFocus(isFocus)
  }

  return (
    <div className={`home${focus ? ' focus' : ''}`}>
      <TopBar />
      <Content bindFocus={handleFocus} />
    </div>
  )
}