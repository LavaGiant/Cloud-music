import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/child-pages/recommend/store'
import { reducer as albumReducer } from '@/pages/discover/child-pages/album/store'
import { reducer as songsReducer } from '@/pages/discover/child-pages/songs/store'
import { reducer as rankingReducer } from '@/pages/discover/child-pages/ranking/store'
import { reducer as artistReducer } from '@/pages/discover/child-pages/artist/store'
import { reducer as radioReducer } from '@/pages/discover/child-pages/dj-radio/store'
import { reducer as playerReducer } from '@/pages/player/store'

const mainReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  album: albumReducer,
  songs: songsReducer,
  ranking: rankingReducer,
  artist: artistReducer,
  radio: radioReducer
})

export default mainReducer