import { memo } from 'react'

import { OperationBarWrapper } from './style'
const SongOperationBar = memo(({favorTitle, shareTitle, commentTitle}) => {
  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="#/play" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="#/addSongList" className="add-icon sprite_button">+</a>
      </span>
      <a href="#/favor" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="#/share" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="#/download" className="item sprite_button">
        <i className="icon download-icon sprite_button">下载</i>
      </a>
      <a href="#/comment" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})

export default SongOperationBar
