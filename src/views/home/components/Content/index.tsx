/*
 * @Description: 内容
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-29 11:10:44
 * @LastEditTime: 2022-08-30 13:44:36
 */
import { useEffect, useState } from 'react'
import { getBaiduKwds } from '@/api'
import './index.scss'

export default ({ bindFocus }: any) => {
  const [searchVal, setSearchVal] = useState('')
  const [kwds, setKwds] = useState([])

  const queryBaiduKwds = async (wd: string) => {
    if (wd.trim() == '') {
      setKwds([])
      return
    }
    const res: any = await getBaiduKwds(wd)
    setKwds(res.s)
  }

  useEffect(() => {
    if (searchVal.trim() == '') {
      setKwds([])
    }
  }, [searchVal])

  const handleChange = (e: any) => {
    const val = e.target.value
    setSearchVal(val)
    queryBaiduKwds(val)
  }

  const handleSearch = (type: 'baidu' | 'google', wd?: string) => {
    const val = wd ? encodeURIComponent(wd) : encodeURIComponent(searchVal)
    switch (type) {
      case 'baidu':
        // window.open('//www.baidu.com/s?wd=' + val)
        break;
      case 'google':
        window.open('//www.google.com/search?q=' + val)
        break;
    }
  }

  const handleSugClick = (wd: string) => {
    setSearchVal(wd)
    handleSearch('baidu', wd)
  }

  return (
    <section className="container">
      <div className="search">
        <input type="text"
          className="search-input"
          value={searchVal}
          onChange={handleChange}
          onKeyDown={({ key }) => key === 'Enter' && handleSearch('baidu')}
          onFocus={() => bindFocus(true)}
          onBlur={() => bindFocus(false)}
          placeholder="请输入关键字..."
        />
        {searchVal && <div className="clear" onClick={() => setSearchVal('')}></div>}
        <div className="search-btns">
          <button className="baidu" onClick={() => handleSearch('baidu')}>百度</button>
          <button className="google" onClick={() => handleSearch('google')}>Google</button>
        </div>
        {
          kwds.length > 0 && (
            <div className="search-suggest">
              {kwds.map(w => (<div className='item' key={w} onClick={() => handleSugClick(w)}>{w}</div>))}
              <div className='intro'>搜索建议来自百度</div>
            </div>
          )
        }
      </div>
    </section>
  )
}