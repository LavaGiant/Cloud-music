import { memo } from 'react'
import { getSizeImage } from "@/utils/format-utils";

import { CoverWrapper } from './style'
const RadioRecommendCover = memo(({ info }) => {
  return (
    <CoverWrapper>
      <a href="#/">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
      </a>
      <a href="#/" className="text-nowrap name">{info.name}</a>
      <p className="text-nowrap">{info.desc}</p>
    </CoverWrapper>
  )
})

export default RadioRecommendCover
