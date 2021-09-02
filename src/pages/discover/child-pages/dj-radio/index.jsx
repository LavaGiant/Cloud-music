import { memo } from 'react'

import RadioRecommend from './child-components/radio-recommend'
import RadioRanking from './child-components/radio-ranking'
import RadioCategory from './child-components/radio-category'

import { DjRadioWrapper } from './style'
const DjRadio = memo(() => {
  return (
    <DjRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRanking />
    </DjRadioWrapper>
  )
})

export default DjRadio
