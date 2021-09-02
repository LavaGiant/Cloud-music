import { Fragment, memo, useState, useCallback, useEffect, useRef } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'

import { getSongDetailAction, changePlaySequenceAction, changePlayingSongAction, changeCurrentLyricContentAction } from '@/pages/player/store'

import { getSizeImage, formatDate, getSongSource } from '@/utils/format-utils'

import { message, Slider } from 'antd'

import { PlayWrapper, Control, PlayInfo, Operator } from './style'
const GlobalPlayer = memo(() => {
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const dispatch = useDispatch()
  const audioRef = useRef()

  const { currentSong, playSequence, playList, lyricList, currentLyricContent } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
    playSequence: state.getIn(['player', 'playSequence']),
    playList: state.getIn(['player', 'playList']),
    lyricList: state.getIn(['player', 'lyricList']),
    currentLyricContent: state.getIn(['player', 'currentLyricContent'])
  }), shallowEqual)


  useEffect(() => {
    audioRef.current.src = getSongSource(currentSong?.id)
  }, [currentSong])
  useEffect(() => {
    isPlaying && audioRef.current.play()
  }, [isPlaying, currentSong])
  useEffect(() => {
    dispatch(getSongDetailAction(1859245776))
  }, [dispatch])

  const changePlayingMusic = tag => {
    if (playList.length < 2) return
    dispatch(changePlayingSongAction(tag))
  }
  const changeSequence = () => {
    let currentSequence = playSequence + 1
    currentSequence > 2 && (currentSequence = 0)
    dispatch(changePlaySequenceAction(currentSequence))
  }
  const timeUpdate = e => {
    isChanging || setCurrentTime(e.target.currentTime * 1000)
    let i = 0
    for (i in lyricList) {
      if (currentTime < lyricList[i].time) {
        break;
      }
    }
    const curContent = lyricList[i - 1]?.content
    if (currentLyricContent !== curContent) {
      dispatch(changeCurrentLyricContentAction(curContent))
      curContent && message.open({
        key: 'lyric',
        content: curContent,
        duration: 0,
        className: 'lyric-class'
      })
    }
  }
  const handleMusicEnded = () => {
    if (playSequence === 2) {
      setCurrentTime(0)
      audioRef.current.play()
    } else {
      dispatch(changePlayingSongAction(1))
      setCurrentTime(0)
      if (playList.length === 1) audioRef.current.play()
    }
  }

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])
  const sliderChange = useCallback(value => {
    setIsChanging(true)
    setCurrentTime(value)
  }, [])
  const sliderAfterChange = useCallback(value => {
    setIsChanging(false)
    audioRef.current.currentTime = value / 1000
    isPlaying || playMusic()
  }, [playMusic, isPlaying])

  return (
    <PlayWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={() => changePlayingMusic(-1)}></button>
          <button className="sprite_player play" onClick={playMusic}></button>
          <button className="sprite_player next" onClick={() => changePlayingMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={`/discover/player?id=${currentSong?.id}`}>
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <div className="singer-name">
                {
                  currentSong?.ar?.map((item, index) => (
                    <Fragment key={item.id}>
                      <a href={`#/artist?id=${item.id}`}>
                        {item.name}
                      </a>{++index !== currentSong?.ar?.length && '/'}
                    </Fragment>
                  ))
                }
              </div>
            </div>
            <div className="progress">
              <Slider
                value={currentTime}
                tipFormatter={null}
                max={currentSong?.dt}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{formatDate(currentTime, 'mm:ss')}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDate(currentSong?.dt, 'mm:ss')}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={() => changeSequence()} ></button>
            <button className="sprite_player btn playlist">{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleMusicEnded} />
    </PlayWrapper>
  )
})

export default GlobalPlayer
