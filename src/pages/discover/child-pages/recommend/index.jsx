import { memo } from 'react'
import HotAnchor from './child-components/hot-anchor'
import HotRecommend from './child-components/hot-recommend'
import NewAlbum from './child-components/new-album'
import RecommendRanking from './child-components/recommend-ranking'
import SettleSinger from './child-components/settle-singer'

import TopBanner from './child-components/top-banner'
import UserLogin from './child-components/user-login'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum/>
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin/>
          <SettleSinger/>
          <HotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend
