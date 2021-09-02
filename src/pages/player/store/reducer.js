import { Map } from "immutable";

import * as actionTypes from './constants'

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  playSequence: 0, //0顺序  1随机   2单曲
  lyricList: [],
  currentLyricContent: ''
})

const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE_CURRENT_SONG: 
      return state.set('currentSong', value)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX: 
      return state.set('currentSongIndex', value)
    case actionTypes.CHANGE_PLAY_LIST: 
      return state.set('playList', value)
    case actionTypes.CHANGE_PLAY_SEQUENCE: 
      return state.set('playSequence', value)
    case actionTypes.CHANGE_LYRIC_LIST: 
      return state.set('lyricList', value)
    case actionTypes.CHANGE_CURRENT_LYRIC_CONTENT: 
      return state.set('currentLyricContent', value)
    default:
      return state
  }
}

export default reducer