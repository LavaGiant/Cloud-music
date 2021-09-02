import * as actionTypes from './constants'
import {All_ALBUMS_LIMIT} from '@/common/constants'

import { getHotAlbums, getAllAlbums } from '@/network/api/album'

export const getHotAlbumAction = () => async dispatch => {
  const res = await getHotAlbums()
  dispatch(changeHotAlbumAction(res))
}

export const getAllAlbumAction = page => async dispatch => {
  const res = await getAllAlbums(All_ALBUMS_LIMIT, (page - 1) * All_ALBUMS_LIMIT)
  dispatch(changeAllAlbumAction(res))
  dispatch(changeAllAlbumTotalAction(res))
}

const changeAllAlbumAction = ({ albums }) => ({
  type: actionTypes.CHANGE_ALL_ALBUMS_LIST,
  value: albums
})

const changeHotAlbumAction = ({ albums }) => ({
  type: actionTypes.CHANGE_HOT_ALBUMS_LIST,
  value: albums
})

const changeAllAlbumTotalAction = ({ total }) => ({
  type: actionTypes.CHANGE_ALL_ALBUMS_TOTAL,
  value: total
})
