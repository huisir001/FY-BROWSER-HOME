/*
 * @Description: 内容
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-29 11:10:44
 * @LastEditTime: 2022-08-30 16:28:55
 */
import { useEffect, useRef, useState } from 'react'
import { getBaiduKwds } from '@/api'
import './index.scss'

export default ({ bindFocus }: any) => {
  // 输入框ref
  const textInput = useRef(null)
  // 输入框值
  const [searchVal, setSearchVal] = useState('')
  // 备份输入值
  const [tmpSearchVal, setTmpSearchVal] = useState('')
  // 搜索建议数组
  const [kwds, setKwds] = useState([])
  // 搜索建议选中下标
  const [actSugIndex, setActSugIndex] = useState(-1)

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
    if (val.trim() == '') {
      return
    }
    switch (type) {
      case 'baidu':
        window.open('//www.baidu.com/s?wd=' + val)
        break
      case 'google':
        window.open('//www.google.com/search?q=' + val)
        break
    };
    (textInput as any).current.focus()
  }

  const handleSugClick = (wd: string) => {
    setSearchVal(wd)
    handleSearch('baidu', wd)
  }

  const handleInputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch('baidu')
    } else if (e.key === 'ArrowDown' && actSugIndex < kwds.length - 1) {
      setActSugIndex((prev) => {
        if (prev === -1) {
          setTmpSearchVal(searchVal)
        }
        const currVal = prev + 1
        setSearchVal(kwds[currVal])
        return currVal
      })
    } else if (e.key === 'ArrowUp' && actSugIndex > -1) {
      setActSugIndex((prev) => {
        const currVal = prev - 1
        if (currVal === -1) {
          setSearchVal(tmpSearchVal)
        } else {
          setSearchVal(kwds[currVal])
        }
        return currVal
      })
    }
    // 阻止默认事件
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
    }
  }

  return (
    <section className="container">
      <div className="search">
        <input type="text"
          className="search-input"
          ref={textInput}
          value={searchVal}
          onChange={handleChange}
          onKeyDown={handleInputKeyDown}
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
              {kwds.map((w, i) => (<div className={`item${actSugIndex == i ? ' act' : ''}`} key={w} onClick={() => handleSugClick(w)}>{w}</div>))}
              <div className='intro'>搜索建议来自百度</div>
            </div>
          )
        }
      </div>
    </section>
  )
}