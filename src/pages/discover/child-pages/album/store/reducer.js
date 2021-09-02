import * as actionTypes from './constants'

import { Map } from "immutable"

const defaultState = Map({
  hotAlbums: [],
  allAlbums: [],
  allAlbumTotal: 0
})
const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE_HOT_ALBUMS_LIST:
      return state.set('hotAlbums', value)
    case actionTypes.CHANGE_ALL_ALBUMS_LIST:
      return state.set('allAlbums', value)
    case actionTypes.CHANGE_ALL_ALBUMS_TOTAL:
      return state.set('allAlbumTotal', value)
    default:
      return state
  }
}

export default reducer
