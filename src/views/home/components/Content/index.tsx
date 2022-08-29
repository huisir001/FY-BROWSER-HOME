/*
 * @Description: 内容
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-29 11:10:44
 * @LastEditTime: 2022-08-30 02:23:56
 */
import { useState } from 'react'
import { getBaiduKwds } from '@/api'
import './index.scss'

export default () => {
  const [searchVal, setSearchVal] = useState('')

  const queryBaiduKwds = async(wd:string) => {
    const kwds = await getBaiduKwds(wd)
    console.log("==kwds",kwds.s);
  }


  const handleSearch = (type: 'baidu' | 'google') => {
    const val = encodeURIComponent(searchVal)
    switch (type) {
      case 'baidu':
        window.open('//www.baidu.com/s?wd=' + val)
        break;
      case 'google':
        window.open('//www.google.com/search?q=' + val)
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
          onKeyDown={({key}) => key==='Enter' && handleSearch('baidu')}
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