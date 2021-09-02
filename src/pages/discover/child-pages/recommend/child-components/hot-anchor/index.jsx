import { memo } from 'react'
import ThemeHeaderSmall from '@/components/theme-header-small'

import { hotRadios } from '@/network/api/mock'

import { HotAnchorWrapper } from './style'
const HotAnchor = memo(() => {
  return (
    <HotAnchorWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map(({ picUrl, name, position, url }) => (
            <div className="item" key={name}>
              <a href={`/#${url}`} className="image">
                <img src={picUrl} alt="" />
              </a>
              <div className="info">
                <a href={`/#${url}`} className="name">{name}</a>
                <div className="position text-nowrap">{position}</div>
              </div>
            </div>
          ))
        }
      </div>
    </HotAnchorWrapper>
  )
})

export default HotAnchor
