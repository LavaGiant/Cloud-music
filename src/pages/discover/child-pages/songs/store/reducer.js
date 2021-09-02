import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  categorySongs: {}
})
const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE_SONG_LIST: 
      return state.set('categorySongs', value)
    default:
      return state
  }
}

export default reducer