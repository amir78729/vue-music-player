import Vue from 'vue'
import Router from 'vue-router'
import PlaylistPage from '../components/PlaylistPage'
import Center from '../components/center'
import Songs from '../components/songs'
import Chat from '../components/Chat'
import Albums from '../components/Albums'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistPage
    },{
      path: '/',
      name: 'home',
      component: Center
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
  ]
})
