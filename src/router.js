import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ './views/product.vue')
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import(/* webpackChunkName: "examples" */ './views/examples.vue')
    },
    {
      path: '/superiority',
      name: 'superiority',
      component: () => import(/* webpackChunkName: "superiority" */ './views/superiority.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
    },
  ]
})
