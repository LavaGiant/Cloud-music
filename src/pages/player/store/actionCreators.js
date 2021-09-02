import * as actionTypes from './constants'

import { getSongDetail, getLyric } from '@/network/api/player'

import { getRandomCount } from '@/utils/math-utils'
import { parseLyric } from '@/utils/format-utils'

export const changePlayingSongAction = tag => (dispatch, getState) => {
  const playList = getState().getIn(['player', 'playList'])
  const sequence = getState().getIn(['player', 'playSequence'])
  let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
  if (sequence === 1) {
    if (!playList.length) return
    let randomIndex = getRandomCount(playList.length)
    while (playList.length !== 1 && randomIndex === currentSongIndex) {
      randomIndex = getRandomCount(playList.length)
    }
    currentSongIndex = randomIndex
  } else {
    currentSongIndex += tag
    if (currentSongIndex >= playList.length || playList.length === 1) currentSongIndex = 0
    if (currentSongIndex < 0) currentSongIndex = playList.length - 1
  }
  dispatch(changeCurrentSongAction(playList[currentSongIndex]))
  dispatch(changeCurrentSongIndexAction(currentSongIndex))
  dispatch(getLyricAction(playList[currentSongIndex]?.id))
}

export const getSongDetailAction = ids => async (dispatch, getState) => {
  const playList = getState().getIn(['player', 'playList'])
  const songIndex = playList.findIndex(item => item.id === ids)
  let song = null
  if (songIndex === -1) {
    const res = await getSongDetail(ids)
    song = res?.songs[0]
    const newPlayList = [...playList]
    newPlayList.push(song)
    dispatch(changePlayListAction(newPlayList))
    dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
  } else {
    song = playList[songIndex]
    dispatch(changeCurrentSongIndexAction(songIndex))
  }
  dispatch(changeCurrentSongAction(song))
  dispatch(getLyricAction(song?.id))
}

export const getLyricAction = id => async dispatch => {
  const res = await getLyric(id)
  dispatch(changeLyricListAction(parseLyric(res?.lrc?.lyric)))
}

const changeLyricListAction = lyricList => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  value: lyricList
})

const changeCurrentSongAction = song => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  value: song
})

const changeCurrentSongIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  value: index
})

const changePlayListAction = list => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  value: list
})

export const changePlaySequenceAction = sequence => ({
  type: actionTypes.CHANGE_PLAY_SEQUENCE,
  value: sequence
})

export const changeCurrentLyricContentAction = lyric => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_CONTENT,
  value: lyric
})
