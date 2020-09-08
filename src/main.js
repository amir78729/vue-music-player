// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {colors} from "./colors";
import {store} from "./store/store";
// import BootstrapVue from 'bootstrap-vue'
//
// Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  colors,
  components: { App },
  template: '<App/>',
  methods: {

  }
})
