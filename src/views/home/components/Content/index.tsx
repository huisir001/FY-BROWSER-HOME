/*
 * @Description: 内容
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-29 11:10:44
 * @LastEditTime: 2022-08-29 18:09:45
 */
import { useState } from 'react'
import './index.scss'

export default () => {
  const [searchVal, setSearchVal] = useState('')
  const handleSearch = (type: 'baidu' | 'google') => {
    console.log(type);
    switch (type) {
      case 'baidu':
        window.open('//www.baidu.com/s?wd=' + searchVal)
        break;
      case 'google':
        window.open('//www.google.com/search?q=' + searchVal)
        break;
    }
  }
  return (
    <section className="container">
      <div className="search">
        <input type="text"
          className="search-input"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="请输入关键字..."
        />
        {searchVal && <div className="clear" onClick={() => setSearchVal('')}></div>}
        <div className="search-btns">
          <button className="baidu" onClick={() => handleSearch('baidu')}>百度</button>
          <button className="google" onClick={() => handleSearch('google')}>Google</button>
        </div>
      </div>
    </section>
  )
}