import { memo } from 'react'

import ThemeHeader from '@/components/theme-header'
import SongsList from './child-components/songs-list'
import { SongsWrapper } from './style'
const Songs = memo(() => {
  return (
    <SongsWrapper className="wrap-v2">
      <ThemeHeader title="全部" titleSize="24px">
        <button className="hot" name="right">热门</button>
      </ThemeHeader>
      <SongsList />
    </SongsWrapper>
  )
})

export default Songs
