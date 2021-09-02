import { memo } from 'react'

import { HeaderWrapper } from './style'
const ThemeHeaderSmall = memo(({title, moreLink}) => {
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      {
        moreLink && <a href={`#/${moreLink}`}>查看全部&gt;</a>
      }
    </HeaderWrapper>
  )
})

export default ThemeHeaderSmall
