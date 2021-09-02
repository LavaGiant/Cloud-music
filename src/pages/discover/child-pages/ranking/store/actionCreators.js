import * as actionTypes from './constants'

import { getRankingBarList, getRankingDetailList } from '@/network/api/ranking'

export const getRankingBarListAction = () => async dispatch => {
  const res = await getRankingBarList()
  dispatch(changeRankingBarListAction(res))
}

export const getRankingDetailListAction = id => async dispatch => {
  const res = await getRankingDetailList(id)
  dispatch(changeRankingDetailListAction(res))
}

export const changeCurrentIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  value: index
})

const changeRankingDetailListAction = ({ playlist }) => ({
  type: actionTypes.CHANGE_RANKING_DETAIL_LIST,
  value: playlist
})

const changeRankingBarListAction = ({ list }) => ({
  type: actionTypes.CHANGE_RANKING_BAR_LIST,
  value: list
})
