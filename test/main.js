import Vue from 'vue'
import UI from '../src/core'
import App from './App.vue'

Vue.use(UI, {
  theme: {
    primary: '#fc644d',
  },
})

const app = new Vue({
  el: '#app',
  render: h => h(App),
})
