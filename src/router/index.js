import Vue from 'vue'
import Router from 'vue-router'
import PlaylistPage from '../components/PlaylistPage'
import center from '../components/center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistPage
    },{
      path: '/',
      name: 'home',
      component: center
    },
  ]
})
