import { memo } from 'react'

import AllAlbum from './child-components/all-album'

import HotAlbum from './child-components/hot-album'
import { AlbumWrapper } from './style'
const Album = memo(() => {
  return (
    <AlbumWrapper className="wrap-v2">
      <HotAlbum />
      <AllAlbum />
    </AlbumWrapper>
  )
})

export default Album
