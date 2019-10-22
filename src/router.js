import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const scrollBehavior =(to, from, savedPosition)=> {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        title:'首页'
      },
      component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
    },
    {
      path: '/product',
      name: 'product',
      meta:{
        title:'产品中心'
      },
      component: () => import(/* webpackChunkName: "product" */ './views/product.vue')
    },
    {
      path: '/examples',
      name: 'examples',
      meta:{
        title:'成功案例'
      },
      component: () => import(/* webpackChunkName: "examples" */ './views/examples.vue')
    },
    {
      path: '/superiority',
      name: 'superiority',
      meta:{
        title:'公司优势'
      },
      component: () => import(/* webpackChunkName: "superiority" */ './views/superiority.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        title:'了解我们'
      },
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
    },
  ],
  scrollBehavior
})

router.beforeEach((to,from,next) => {
  console.log(to)
  if(to.meta.title){
    document.title = `${to.meta.title} | 安居门窗`
  }
  next();
})
export default router
