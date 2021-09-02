import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  artistList: [],
  currentArea: 7,
  currentType: {
    name: '推荐歌手',
    type: 1
  }
})

const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set('artistList', value)
    case actionTypes.CHANGE_CURRENT_AREA:
      return state.set('currentArea', value)
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set('currentType', value)
    default:
      return state
  }
}

export default reducer
