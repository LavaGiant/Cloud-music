import { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils';

import { ItemWrapper } from './style'
const ArtistItem = memo(({ info, index }) => {
  return (
    <ItemWrapper>
      {
        index < 10 && (
          <div className="image">
            <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
          </div>
        )
      }
      <div className="info">
        <span className="name">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ItemWrapper>
  )
})

export default ArtistItem
