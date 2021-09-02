import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { getSongDetailAction } from '@/pages/player/store'

import { getSizeImage } from '@/utils/format-utils'
import { TopRankingWrapper } from './style'
const TopRanking = memo(({ info }) => {
  const { name, coverImgUrl, id, tracks = [] } = info
  const dispatch = useDispatch()
  const playMusic = id => {
    dispatch(getSongDetailAction(id))
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(coverImgUrl)} alt="" />
          <a href={`#/discover/ranking?id=${id}`} className="image_cover"> </a>
        </div>
        <div className="info">
          <a href={`#/discover/ranking?id=${id}`}>{name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map(({ id, name }, index) => (
            <div key={id} className="list-item">
              <div className="rank">{++index}</div>
              <div className="info">
                <div className="name text-nowrap">{name}</div>
                <div className="operate">
                  <button className="btn sprite_02 play" onClick={() => playMusic(id)}></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="footer">
        <a href={`#/discover/ranking?id=${id}`}>查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking
