import { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { getSizeImage, formatDate } from '@/utils/format-utils'

import SongOperationBar from '@/components/song-operation-bar'
import { RankingHeaderWrapper } from './style'
const RankingHeader = memo(({ updateFrequency }) => {

  const { rankingDetail: {
    coverImgUrl,
    name,
    updateTime,
    subscribedCount,
    shareCount,
    commentCount } } = useSelector(state => ({
      rankingDetail: state.getIn(['ranking', 'rankingDetailList']),
    }), shallowEqual)
  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={getSizeImage(coverImgUrl, 150)} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatDate(updateTime, 'MM月dd日')}</div>
          <div className="update-f">（{updateFrequency}）</div>
        </div>
        <SongOperationBar
          favorTitle={subscribedCount}
          shareTitle={shareCount}
          commentTitle={commentCount}
        />
      </div>
    </RankingHeaderWrapper>
  )
})

export default RankingHeader
