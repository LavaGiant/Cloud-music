import { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeDjRadioCurrentIdAction, getDjRadioCatelistAction } from '../../store/actionCreators'

import { DJ_RADIO_PAGE_SIZE } from '@/common/constants'

import { Carousel } from 'antd';

import { CategoryWrapper, CategoryItemImage, CategoryContent } from './style'
const RadioCategory = memo(() => {

  const { categories, currentId } = useSelector(state => ({
    categories: state.getIn(['radio', 'categories']),
    currentId: state.getIn(['radio', 'currentId'])
  }), shallowEqual)

  const page = Math.ceil(categories?.length / DJ_RADIO_PAGE_SIZE) || 1;

  const getSize = index => index * DJ_RADIO_PAGE_SIZE < categories?.length ? index * DJ_RADIO_PAGE_SIZE : categories?.length;

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDjRadioCatelistAction())
  }, [dispatch])
  const carouselRef = useRef()
  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={() => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{ className: "dots" }} ref={carouselRef}>
          {
            Array(page).fill(0).map((_, index) => (
              <div className="category-page" key={index}>
                {
                  categories?.slice(index * DJ_RADIO_PAGE_SIZE, getSize(index + 1)).map(({ id, name, picWebUrl }) => (
                    <div key={id}
                      className={`category-item ${currentId === id ? 'active' : ''}`}
                      onClick={() => dispatch(changeDjRadioCurrentIdAction(id))}
                    >
                      <CategoryItemImage className="image" imgUrl={picWebUrl}></CategoryItemImage>
                      <span>{name}</span>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={() => carouselRef.current.next()}></div>
    </CategoryWrapper>
  )
})

export default RadioCategory
