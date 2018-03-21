import Vue from 'vue'
import App from './App.vue'

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

new Vue({
  el: '#app',
  render: h => h(App)
})
