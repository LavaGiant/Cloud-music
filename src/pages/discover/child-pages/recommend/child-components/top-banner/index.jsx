import { memo, useCallback, useEffect, useRef, useState} from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

import { getTopBannerAction } from '@/pages/discover/child-pages/recommend/store/actionCreators'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

const TopBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  const dispatch = useDispatch()

  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((_, to) => {
    setCurrentIndex(to)
  }, [])

  const bgImage = topBanners[currentIndex] && `${topBanners[currentIndex].imageUrl}?imageView&blur=40x20`
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map(item => (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                </div>
              ))
            }
          </Carousel>,
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl>
          <button className=" btn left" onClick={() => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={() => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner



// class写法
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
