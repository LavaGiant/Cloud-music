import { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { AlbumWrapper } from './style'
const AlbumCover = memo(({ info, size = 100, width = 118, bgp = -570 }) => {
  const { picUrl, name, artist, id } = info
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(picUrl, size)} alt="" />
        <a href={`#album?id=${id}`} className="cover sprite_cover">{name}</a>
      </div>
      <div className="album-info">
        <div className="name">{name}</div>
        <div className="artist">{artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover
