import request from '@/network/request'

const { get } = request

export const getSongDetail = ids => get('song/detail', { params: { ids } })
export const getLyric = id => get('/lyric', { params: { id } })