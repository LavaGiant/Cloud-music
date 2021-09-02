import { memo } from 'react'
import { MyMusicWrapper } from './style'

const MyMusic = memo(() => {
  return (
    <MyMusicWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="#/login">立即登录</a>
        </div>
      </div>
    </MyMusicWrapper>
  )
})

export default MyMusic
