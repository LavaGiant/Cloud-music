import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  categories: [],
  currentId: 3,
  recommends: [],
  radios: {}
})

const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set('currentId', value)
    case actionTypes.CHANGE_RADIOS:
      return state.set('radios', value)
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set('categories', value)
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set('recommends', value)
    default:
      return state
  }
}

export default reducer
