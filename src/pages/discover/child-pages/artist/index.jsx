import { memo } from 'react'

import ArtistCategory from './child-components/artist-category'
import ArtistList from './child-components/artist-list'

import { ArtistWrapper } from './style'
const Artist = memo(() => {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <ArtistCategory />
        <ArtistList/>
      </div>
    </ArtistWrapper>
  )
})

export default Artist
