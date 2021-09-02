import * as actionTypes from './constants'
import { getArtistList } from '@/network/api/artist'

export const getArtistListAction = (area, type, alpha) => async dispatch => {
  const res = await getArtistList(area, type, alpha)
  dispatch(changeArtistListAction(res))
}

export const changeCurrentAreaAction = area => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  value: area
})

export const changeCurrentTypeAction = type => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  value: type
})

const changeArtistListAction = ({ artists }) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  value: artists
})
