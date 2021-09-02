import { memo, useCallback, useState } from 'react'
import RankingBar from './child-components/ranking-bar'
import RankingHeader from './child-components/ranking-header'
import RankingList from './child-components/ranking-list'

import { RankingWrapper, RankingLeft, RankingRight } from './style'
const Ranking = memo(() => {
  const [updateFrequency, setUpdateFrequency] = useState('')
  const getUpdateFrequency = useCallback(frequency => {
    setUpdateFrequency(frequency)
  }, [])
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <RankingBar getUpdateFrequency={getUpdateFrequency} />
      </RankingLeft>
      <RankingRight>
        <RankingHeader updateFrequency={updateFrequency} />
        <RankingList />
      </RankingRight>
    </RankingWrapper>
  )
})

export default Ranking
