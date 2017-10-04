import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import router from './router'
import store from './store'
import URI from 'urijs'
import qs from 'qs'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

function generateGetCodeUrl (id) {
  document.location = new URI('https://open.weixin.qq.com/connect/oauth2/authorize')
    .addQuery('appid', id)
    .addQuery('redirect_uri', document.location.href)
    .addQuery('response_type', 'code')
    .addQuery('scope', 'snsapi_userinfo')
    .addQuery('response_type', 'code')
    .hash('wechat_redirect')
    .toString()
}

let ua = navigator.userAgent.toLowerCase()
if (ua.match(/MicroMessenger/i) === 'micromessenger') {
  if (localStorage.wxUserInfo) {
    store.userStore.wxUserInfo = JSON.parse(localStorage.wxUserInfo)
    store.userStore.wxLogin()
  } else {
    const uri = new URI(document.location.href)
    const query = uri.query(true)
    const {code} = query
    if (code) {
      Vue.http.post('/XRepair/BackEnd/public/service/public/getWxUserInfo', qs.stringify({code})).then((res) => {
        store.userStore.wxUserInfo = res.data
        localStorage.wxUserInfo = JSON.stringify(res.data)
        store.userStore.wxLogin()
      })
    } else {
      if (localStorage.appid) {
        generateGetCodeUrl(localStorage.appid)
      } else {
        Vue.http.get('/XRepair/BackEnd/public/service/public/getAppId').then((res) => {
          let data = res.data
          if (data.code === 200) {
            localStorage.appid = data.result
            generateGetCodeUrl(data.result)
          }
        })
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  FastClick.attach(document.body)
}, false)

Vue.config.productionTip = false
router.beforeEach((route, redirect, next) => {
  /* 显示加载中动画 */
  store.commit('UPDATE_LOADING_STATUS', true)
  next()
})

router.afterEach(route => {
  /* 隐藏加载中动画 */
  store.commit('UPDATE_LOADING_STATUS', false)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
