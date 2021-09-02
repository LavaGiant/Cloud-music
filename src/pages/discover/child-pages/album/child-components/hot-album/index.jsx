import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotAlbumAction } from '../../store/actionCreators'

import ThemeHeader from '@/components/theme-header'
import AlbumCover from '@/components/album-cover'
import { HotAlbumWrapper } from './style'
const HotAlbum = memo(() => {
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(['album', 'hotAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotAlbumAction())
  }, [dispatch])
  return (
    <HotAlbumWrapper>
      <ThemeHeader title="热门新碟" titleSize="24px" />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map(item => (
            <AlbumCover
              info={item}
              size={130}
              width={153}
              bgp={-845}
              key={item.id}
            />
          ))
        }
      </div>
    </HotAlbumWrapper>
  )
})

export default HotAlbum
