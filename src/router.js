import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(Router)

let routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/other',
  name: 'other',
  component: resolve => require(['./pages/Other.vue'], resolve)
}]

export default new Router({
  routes
})
