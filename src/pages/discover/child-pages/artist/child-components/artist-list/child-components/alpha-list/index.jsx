import { memo, useState, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getArtistListAction } from '../../../../store/actionCreators'

import { singerAlphas } from '@/utils/format-utils'

import { AlphaListWrapper } from './style'
const AlphaList = memo(() => {
  const [currentAlpha, setCurrentAlpha] = useState("-1");

  const { currentType, currentArea } = useSelector(state => ({
    currentType: state.getIn(['artist', 'currentType']),
    currentArea: state.getIn(['artist', 'currentArea']),
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentType, currentArea])

  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [dispatch, currentArea, currentType, currentAlpha]);

  return (
    <AlphaListWrapper hasTop={currentArea !== "-1"}>
      {
        currentArea !== -1 && singerAlphas.map(item => {
          if (item === "0") item = "其他";
          if (item === "-1") item = "热门";
          return (
            <div key={item} className={`item ${(currentAlpha === item || (item === '热门' && currentAlpha === '-1')) ? 'active' : ''}`}>
              <span onClick={() => setCurrentAlpha(item)}>{item.toUpperCase()}</span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})

export default AlphaList
