import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '@/common/local-data'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const GlobalHeader = memo(() => {

  const showSelectItem = ({ link, title }, index) => {
    if (index < 3) {
      return (
        <NavLink to={link}>
          {title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={link} target="_blank" rel="noreferrer">{title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"> </a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              ))
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" className="search" prefix={<SearchOutlined />}/>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default GlobalHeader
