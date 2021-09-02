import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSettleSingerAction } from '../../store/actionCreators'

import { getSizeImage } from '@/utils/format-utils'

import ThemeHeaderSmall from '@/components/theme-header-small'
import { SetterSingerWrapper } from './style'
const SettleSinger = memo(() => {
  const { settleSingers } = useSelector(state => ({
    settleSingers: state.getIn(['recommend', 'settleSingers'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSettleSingerAction(5, 5001))
  }, [dispatch])
  return (
    <SetterSingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" moreLink='discover/artist/signed' />
      <div className="singer-list">
        {
          settleSingers.map(({ id, img1v1Url, alias, name }) => (
            <a href={`#/user/home?id=${id}`} key={id} className="item">
              <img src={getSizeImage(img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="name">{name}</div>
                <div className="alias text-nowrap">{alias.join("") || name}</div>
              </div>
            </a>
          ))
        }
      </div>
      <div className="apply-for">
        <a href="https://music.163.com/st/musician" target="_blank" rel="noreferrer">申请成为网易音乐人</a>
      </div>
    </SetterSingerWrapper>
  )
})

export default SettleSinger
