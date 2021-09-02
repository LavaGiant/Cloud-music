import request from '@/network/request'

const { get } = request

export const getTopBanners = () => get(`banner`)
export const getHotRecommends = limit => get(`personalized`, { params: { limit } })
export const getNewAlbum = limit => get(`top/album`, { params: { limit } })
export const getTopList = idx => get(`top/list`, { params: { idx } })
export const getSettleSinger = (limit, cat) => get(`artist/list`, {params: {limit, cat}})