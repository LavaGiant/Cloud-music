import * as actionTypes from './constants'
import { PER_PAGE_NUMBER } from '@/common/constants'
import { getSongList } from '@/network/api/songs'

export const getSongListAction = page => async dispatch => {
  const res = await getSongList('全部', page * PER_PAGE_NUMBER)
  dispatch(changeSongListAction(res))
}
const changeSongListAction = res => ({
  type: actionTypes.CHANGE_SONG_LIST,
  value: res
})
