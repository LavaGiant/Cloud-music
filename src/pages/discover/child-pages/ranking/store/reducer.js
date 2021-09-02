import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  rankingDetailList: {},
  rankingBarList: [],
  currentIndex: 0
})

const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', value)
    case actionTypes.CHANGE_RANKING_BAR_LIST:
      return state.set('rankingBarList', value)
    case actionTypes.CHANGE_RANKING_DETAIL_LIST:
      return state.set('rankingDetailList', value)
    default:
      return state
  }
}

export default reducer