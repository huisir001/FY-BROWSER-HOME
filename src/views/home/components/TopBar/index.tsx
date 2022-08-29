/*
 * @Description: 顶栏
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-29 11:10:32
 * @LastEditTime: 2022-08-29 15:59:34
 */
import './index.scss'
import logo from '@/assets/svg/logo.svg'

export default () => (
  <header className="top-bar">
    <div className="left">
      <img src={logo} alt="风云主页 | 一个简单且强大的浏览器主页" className="logo" />
    </div>
    <div className="right">
      <nav className="nav">
        <div className='li'>编辑</div>
        <div className='li'>主题</div>
        <div className='li'>登录</div>
      </nav>
    </div>
  </header>
)