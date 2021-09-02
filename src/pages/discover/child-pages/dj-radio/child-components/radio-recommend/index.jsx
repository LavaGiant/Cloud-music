import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getDjRadioRecommendAction } from '../../store/actionCreators'

import ThemeHeader from '@/components/theme-header'
import RadioRecommendCover from './radio-recommend-cover'

import { RecommendWrapper } from './style'

const RadioRecommend = memo(() => {
  
  const { recommends, currentId } = useSelector(state => ({
    recommends: state.getIn(['radio', 'recommends']),
    currentId: state.getIn(['radio', 'currentId'])
  }), shallowEqual)
  
  const dispatch = useDispatch()
  useEffect(() => {
    if(currentId === 0) return 
    dispatch(getDjRadioRecommendAction(currentId))
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <ThemeHeader title="优秀新电台" titleSize="24px" />
      <div className="radio-list">
      {
        recommends.slice(0,5).map(item => <RadioRecommendCover info={item} key={item.id}/>)
      }
      </div>
    </RecommendWrapper>
  )
})

export default RadioRecommend
