import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends, getNewAlbum, getTopList, getSettleSinger } from '@/network/api/recommend'

const changeTopBannerAction = ({ banners }) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  value: banners
})

export const getTopBannerAction = () => async dispatch => {
  const res = await getTopBanners()
  dispatch(changeTopBannerAction(res))
}

const changeHotRecommendAction = ({ result }) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  value: result
})

export const getHotRecommendAction = limit => async dispatch => {
  const res = await getHotRecommends(limit)
  dispatch(changeHotRecommendAction(res))
}

const changeNewAlbumAction = ({ albums }) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  value: albums
})

export const getNewAlbumAction = limit => async dispatch => {
  const res = await getNewAlbum(limit)
  dispatch(changeNewAlbumAction(res))
}

const changeNewRankingAction = ({ playlist }) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  value: playlist
})
const changeUpRankingAction = ({ playlist }) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  value: playlist
})
const changeOriginRankingAction = ({ playlist }) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  value: playlist
})

export const getTopListAction = idx => async dispatch => {
  const res = await getTopList(idx)
  const obj = {
    0: changeNewRankingAction,
    2: changeOriginRankingAction,
    3: changeUpRankingAction,
  }
  dispatch(obj[idx](res))
}

const changeSettleSingerAction = ({ artists }) => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  value: artists
})

export const getSettleSingerAction = (limit, cat) => async dispatch => {
  const res = await getSettleSinger(limit, cat)
  dispatch(changeSettleSingerAction(res))
}
