import { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { changeCurrentAreaAction, changeCurrentTypeAction } from '../../store/actionCreators';

import { artistCategories } from '@/network/api/mock';

import { CategoryItem, CategoryWrapper } from './style'
const ArtistCategory = memo(() => {

  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.getIn(['artist', 'currentArea']),
    currentType: state.getIn(['artist', 'currentType']),
  }), shallowEqual)

  const dispatch = useDispatch()
  const selectArtist = (area, type) => {
    dispatch(changeCurrentAreaAction(area))
    dispatch(changeCurrentTypeAction(type))
  }

  const renderArtist = (artists, area) => (
    <div>
      {
        artists?.map(item => (
          <CategoryItem key={item.name} className={(currentArea === area && currentType.type === item.type) ? 'active' : null}>
            <span onClick={() => selectArtist(area, item)}>{item.name}</span>
          </CategoryItem>
        )
        )
      }
    </div>
  )
  return (
    <CategoryWrapper>
      {
        artistCategories.map(({ title, area, artists }) => (
          <div className="section" key={area}>
            <h2 className="title">{title}</h2>
            {renderArtist(artists, area)}
          </div>
        ))
      }
    </CategoryWrapper>
  )
})

export default ArtistCategory
