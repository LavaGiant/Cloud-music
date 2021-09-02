import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSizeImage } from "@/utils/format-utils";

import { getRankingBarListAction, changeCurrentIndexAction, getRankingDetailListAction } from '../../store/actionCreators'

import { RankingBarWrapper } from './style'
const RankingBar = memo(({ getUpdateFrequency }) => {

  const { barList, currentIndex } = useSelector(state => ({
    barList: state.getIn(['ranking', 'rankingBarList']),
    currentIndex: state.getIn(['ranking', 'currentIndex'])
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankingBarListAction())
  }, [dispatch])
  useEffect(() => {
    const id = barList[currentIndex]?.id
    if (!id) return
    dispatch(getRankingDetailListAction(id))
    getUpdateFrequency(barList[currentIndex]?.updateFrequency)
  }, [dispatch, barList, currentIndex, getUpdateFrequency])

  const handleItemClick = index => {
    dispatch(changeCurrentIndexAction(index))
    dispatch(getRankingDetailListAction(barList[index].id))
    getUpdateFrequency(barList[index]?.updateFrequency)
  }

  return (
    <RankingBarWrapper>
      {
        barList?.map((item, index) => {
          let header = null
          if (index === 0 || index === 4)
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          return (
            <div key={item.id}>
              {header}
              <div className={`item ${currentIndex === index ? 'active' : ''}`} onClick={() => handleItemClick(index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </RankingBarWrapper>
  )
})

export default RankingBar
