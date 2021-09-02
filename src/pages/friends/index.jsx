import { memo } from 'react'
import { FriendWrapper } from './style'
const Friends = memo(() => {
  return (
    <FriendWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a href="#/login" className="login">立即登录</a>
        </div>
      </div>
    </FriendWrapper>
  )
})

export default Friends
