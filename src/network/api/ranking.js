import request from '../request'
const { get } = request
export const getRankingBarList = () => get('/toplist')
export const getRankingDetailList = id => get('/playlist/detail', { params: { id } })