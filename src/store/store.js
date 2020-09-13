import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentPlaylistIndex: 0,
    currentChatIndex: 0,
    currentColor: 'red',
    currentVolume: 50


  },getters: {

  },mutations: { //setters

  }
});
