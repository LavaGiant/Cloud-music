import request from '@/network/request'
const { get } = request
export const getHotAlbums = () => get('album/newest')
export const getAllAlbums = (limit, offset) => get('top/album', { params: { limit, offset } })