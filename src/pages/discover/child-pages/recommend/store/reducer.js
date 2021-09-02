import * as actionTypes from './constants'

import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSingers: []
})
const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', value)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', value)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', value)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', value)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', value)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', value)
    case actionTypes.CHANGE_SETTLE_SINGER: 
      return state.set('settleSingers', value)
    default:
      return state
  }
}

export default reducer