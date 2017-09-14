import Vue from 'vue'
import UI from '../src/core'
import App from './App.vue'

Vue.use(UI, {
  theme: {
    primary: '#30cd84',
  },
})

const app = new Vue({
  el: '#app',
  render: h => h(App),
})
