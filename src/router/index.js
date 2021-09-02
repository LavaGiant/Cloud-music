import { lazy } from 'react'
import { Redirect } from "react-router-dom"

const Discover = lazy(_ => "@/pages/discover")
const Friends = lazy(_ => "@/pages/friends")
const Recommend = lazy(_ => "@/pages/discover/child-pages/recommend")
const Album = lazy(_ => "@/pages/discover/child-pages/album")
const Artist = lazy(_ => "@/pages/discover/child-pages/artist")
const DjRadio = lazy(_ => "@/pages/discover/child-pages/dj-radio")
const Ranking = lazy(_ => "@/pages/discover/child-pages/ranking")
const Songs = lazy(_ => "@/pages/discover/child-pages/songs")
const MyMusic = lazy(_ => "@/pages/my-music")
const Player = lazy(_ => '@/pages/player')
const NotFound = lazy(_ => '@/pages/404')

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/artist',
        exact: true,
        component: Artist
      },
      {
        path: '/discover/artist/signed',
        exact: true,
        component: Artist
      },
      {
        path: '/discover/djradio',
        component: DjRadio
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/player',
        component: Player
      },
    ]
  },
  {
    path: '/my',
    component: MyMusic
  },
  {
    path: '/friend',
    component: Friends
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes