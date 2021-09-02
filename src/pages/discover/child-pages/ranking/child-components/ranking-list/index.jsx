import { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { getSizeImage, formatDate } from "@/utils/format-utils.js"

import ThemeHeader from '@/components/theme-header'

import { RankingListWrapper } from './style'
const RankingList = memo(() => {
  const { rankingDetail } = useSelector(state => ({
    rankingDetail: state.getIn(['ranking', 'rankingDetailList'])
  }), shallowEqual)
  return (
    <RankingListWrapper>
      <ThemeHeader title="歌曲列表">
        <div className="header-left" name="left">{rankingDetail?.trackCount}首歌</div>
        <div name="right" className="header-right">
          <span>播放：</span>
          <span className="count">{rankingDetail?.playCount}</span>
          <span>次</span>
        </div>
      </ThemeHeader>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              rankingDetail?.tracks?.map((item, index) => (
                <tr className="" key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {
                        index < 3 ?
                          (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                      }
                      <span className="play sprite_table"></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatDate(item.dt, 'mm:ss')}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

export default RankingList
