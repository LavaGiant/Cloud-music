import { memo, useCallback } from 'react'

import { BackTop } from 'antd';

import { BackTopWrapper, backStyle } from './style'
const GlobalBackTop = memo(() => {
  /** @type {HTMLCanvasElement} */
  const setCanvasRef = useCallback(node => {
    const ctx = node?.getContext("2d")
    if (ctx) {
      ctx.font = "12px 微软雅黑"
      ctx.fillStyle = '#333'
      ctx?.fillText('TOP', 11, 35)
      ctx.beginPath()
      ctx.moveTo(18, 13)
      ctx.lineTo(22, 7)
      ctx.lineTo(26, 13)
      ctx.stroke()
    }
  }, [])
  return (
    <BackTopWrapper>
      <BackTop>
        <div style={backStyle}>
          <canvas id="back" width="49" height='44' ref={setCanvasRef}></canvas>
          {/* TOP */}
        </div>
      </BackTop>
    </BackTopWrapper>
  )
})

export default GlobalBackTop
