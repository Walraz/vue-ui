import Vue from 'vue'
import VueRouter from 'vue-router'
import UI from '../src/core'
import App from './App.vue'
import Login from './views/Login.vue'
import TimeTable from './views/TimeTable.vue'

Vue.use(VueRouter)
Vue.use(UI, {
  theme: {
    primary: '#00bece',
    darkColor: '#111',
  },
})

const routes = [
  { path: '/login', component: Login },
  { path: '/time-table', component: TimeTable },
]

const router = new VueRouter({
  routes,
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
