import * as actionTypes from './constants'
import {DJ_RADIO_RANKING_COUNT} from '@/common/constants'

import { getDjRadioCatelist, getDjRadioRecommend, getDjRadioList } from '@/network/api/dj-radio'

export const getDjRadioCatelistAction = () => async dispatch => {
  const res = await getDjRadioCatelist()
  dispatch(changeDjRadioCatelistAction(res))
}

export const changeDjRadioCurrentIdAction = id => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  value: id
})

export const getDjRadioRecommendAction = id => async dispatch => {
  const res = await getDjRadioRecommend(id)
  dispatch(changeDjRadioRecommendAction(res))
}

export const getDjRadioListAction = (currentId, offset) => async dispatch => {
  const res = await getDjRadioList(currentId, DJ_RADIO_RANKING_COUNT, offset)
  dispatch(changeDjRadioListAction(res))
}

const changeDjRadioListAction = res => ({
  type: actionTypes.CHANGE_RADIOS,
  value: res
})

const changeDjRadioRecommendAction = ({ djRadios }) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  value: djRadios
})

const changeDjRadioCatelistAction = ({ categories }) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  value: categories
})
