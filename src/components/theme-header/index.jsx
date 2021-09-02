import { memo } from 'react'


import { HeaderWrapper } from './style'

const ThemeHeader = memo(({ title, icon = false, moreLink, children = [], titleSize }) => {
  if (!Array.isArray(children)) children = [children]
  const [rightSlot] = children.filter(item => item.props.name === 'right')
  const [leftSlot] = children.filter(item => item.props.name === 'left')
  const moreDom = <div>
    <a href={`/#${moreLink}`}>更多</a>
    <i className="icon sprite_02"></i>
  </div>
  return (
    <HeaderWrapper className={icon && "sprite_02"} icon={icon} titleSize={titleSize}>
      <div className="left">
        <h3 className="title">{title}</h3>
        {leftSlot}
      </div>
      <div className="right">
        {moreLink ? moreDom : rightSlot}
      </div>
    </HeaderWrapper>
  )
})

export default ThemeHeader
