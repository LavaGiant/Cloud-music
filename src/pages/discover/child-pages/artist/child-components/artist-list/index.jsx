import { memo } from 'react'
import { useSelector,shallowEqual } from 'react-redux';

import ThemeHeader from '@/components/theme-header';
import AlphaList from './child-components/alpha-list';
import ArtistItem from './child-components/artist-item'

import { ArtistListWrapper } from './style'
const ArtistList = memo(() => {
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);
  return (
    <ArtistListWrapper>
      <ThemeHeader title={currentType.name} titleSize="24px"></ThemeHeader>
      <AlphaList />
      <div className="artist-list">
        {
          artistList?.map((item, index) => {
            return <ArtistItem key={item.id} index={index} info={item} />
          })
        }
      </div>
    </ArtistListWrapper>
  )
})

export default ArtistList
