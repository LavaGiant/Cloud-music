import { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import SongsCover from '@/components/songs-cover'
import ThemeHeader from '@/components/theme-header'

import { getHotRecommendAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import { RecommendWrapper } from './style'

const HotRecommend = memo(() => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  return (
    <RecommendWrapper>
      <ThemeHeader title="热门推荐" icon={true} moreLink='/discover/songs'>
        <div name="left">
          <div className="keyword">
            {
              keywords.map((item, index) => (
                <div key={item} className="item">
                  <a href={`#/discover/songs/?cat=${item}`}>{item}</a>
                  {
                    index !== keywords.length - 1 && <span className="divider">|</span>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </ThemeHeader>
      <div className="recommend-list">
        {
          hotRecommends.map(item => (
            <SongsCover key={item.id} info={item}></SongsCover>
          ))
        }
      </div>
    </RecommendWrapper>
  )
})

export default HotRecommend
