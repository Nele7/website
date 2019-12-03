import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import '@/style/index.scss'
import 'animate.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


import AMap from 'vue-amap'
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '85afb47a28fb4c4a4826776fdf2eb37f'
})

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
