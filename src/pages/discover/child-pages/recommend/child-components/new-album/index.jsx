import { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import ThemeHeader from '@/components/theme-header'
import { AlbumWrapper } from './style'
import AlbumCover from '../../../../../../components/album-cover'

const NewAlbum = memo(() => {

  const carouselRef = useRef()

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  return (
    <AlbumWrapper>
      <ThemeHeader title="新碟上架" icon={true} moreLink='/discover/album' />
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={() => carouselRef.current.prev()}></div>
        <div className="album">
          <Carousel dots={false} ref={carouselRef}>
            {
              [0, 1].map(num => (
                <div className="page" key={num}>
                  {
                    newAlbums.slice(num * 5, ++num * 5).map(item => (
                      <AlbumCover key={item.id} info={item}/>
                    ))
                  }
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={() => carouselRef.current.next()}></div>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum
