import { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { DJ_RADIO_RANKING_COUNT } from '@/common/constants'

import { getDjRadioListAction } from '../../store/actionCreators'

import ThemeHeader from '@/components/theme-header';
import RadioRankingCover from './radio-ranking-cover';
import Pagination from '@/components/pagination';

import { RankingWrapper } from './style'
const RadioRanking = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);

  const { currentId, radioInfo } = useSelector(state => ({
    currentId: state.getIn(['radio', 'currentId']),
    radioInfo: state.getIn(['radio', 'radios']),
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentId === 0) return
    dispatch(getDjRadioListAction(currentId, 0))
  }, [dispatch, currentId])
  useEffect(() => {
    setCurrentPage(1)
  }, [currentId])
  const onPageChange = useCallback(page => {
    setCurrentPage(page);
    dispatch(getDjRadioListAction(currentId, page * DJ_RADIO_RANKING_COUNT));
  }, [currentId, dispatch])

  return (
    <RankingWrapper>
      <ThemeHeader title="电台排行榜" titleSize="24px" />
      <div className="ranking-list">
        {
          radioInfo?.djRadios?.map(item => <RadioRankingCover key={item.id} radio={item} />)
        }
      </div>
      {
        radioInfo?.hasMore && <Pagination
          currentPage={currentPage}
          total={radioInfo?.count}
          pageSize={DJ_RADIO_RANKING_COUNT}
          onPageChange={onPageChange}
        />
      }
    </RankingWrapper>
  )
})

export default RadioRanking
