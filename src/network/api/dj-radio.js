import request from '../request'
const { get } = request

export const getDjRadioCatelist = () => get('dj/catelist')
export const getDjRadioRecommend = type => get('dj/recommend/type', { params: { type } })
export const getDjRadioList = (cateId, limit, offset) => get('dj/radio/hot', { params: { cateId, limit, offset } })
