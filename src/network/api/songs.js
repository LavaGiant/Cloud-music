import request from '@/network/request'
import {PER_PAGE_NUMBER} from '@/common/constants'
const { get } = request
export const getSongCategory = () => get('playlist/catlist')
export const getSongList = (cat = "全部", offset = 0, limit = PER_PAGE_NUMBER) => get('top/playlist', {
  params: {
    cat,
    offset,
    limit
  }
})