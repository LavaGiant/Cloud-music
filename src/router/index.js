import { Redirect } from "react-router-dom"

import Discover from "@/pages/discover"
import Friends from "@/pages/friends"
import Recommend from "@/pages/discover/child-pages/recommend"
import Album from "@/pages/discover/child-pages/album"
import Artist from "@/pages/discover/child-pages/artist"
import DjRadio from "@/pages/discover/child-pages/dj-radio"
import Ranking from "@/pages/discover/child-pages/ranking"
import Songs from "@/pages/discover/child-pages/songs"
import MyMusic from "@/pages/my-music"
import Player from '@/pages/player'
import NotFound from '@/pages/404'

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