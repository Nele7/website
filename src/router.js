import Vue from 'vue'
import Router from 'vue-router'
import {state,mutations} from './store'

Vue.use(Router)
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}
const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "login" */ './views/login.vue'),
      meta: {
        title: '登录页'
      },
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import( /* webpackChunkName: "layout" */ './views/layout/index.vue'),
      children: [{
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          meta: {
            title: '首页'
          },
          component: () => import( /* webpackChunkName: "home" */ './views/home.vue')
        },
        {
          path: 'product',
          name: 'product',
          meta: {
            title: '产品中心'
          },
          component: () => import( /* webpackChunkName: "product" */ './views/product.vue')
        },
        {
          path: 'examples',
          name: 'examples',
          meta: {
            title: '成功案例'
          },
          component: () => import( /* webpackChunkName: "examples" */ './views/examples.vue')
        },
        {
          path: 'superiority',
          name: 'superiority',
          meta: {
            title: '公司优势'
          },
          component: () => import( /* webpackChunkName: "superiority" */ './views/superiority.vue')
        },
        {
          path: 'about',
          name: 'about',
          meta: {
            title: '了解我们'
          },
          component: () => import( /* webpackChunkName: "about" */ './views/about.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import( /* webpackChunkName: "admin" */ './views/admin/layout/index.vue'),
      meta: {
        title: '后台管理'
      },
      children: [{
          path: '',
          redirect: 'banner'
        },
        {
          path: 'banner',
          name: 'm-banner',
          meta: {
            title: '轮播模块管理'
          },
          component: () => import( /* webpackChunkName: "m-banner" */ './views/admin/m-banner.vue')
        },
        {
          path: 'staff',
          name: 'm-staff',
          meta: {
            title: '人员模块管理'
          },
          component: () => import( /* webpackChunkName: "m-staff" */ './views/admin/m-staff.vue')
        },
        {
          path: 'product',
          name: 'm-product',
          meta: {
            title: '产品模块管理'
          },
          component: () => import( /* webpackChunkName: "m-product" */ './views/admin/m-product.vue')
        },
        {
          path: 'productCategory',
          name: 'm-productCategory',
          meta: {
            title: '产品分类'
          },
          component: () => import( /* webpackChunkName: "m-product" */ './views/admin/m-productCategory.vue')
        },
        // {
        //   path: 'company',
        //   name: 'm-company',
        //   meta: {
        //     title: '我的公司管理'
        //   },
        //   component: () => import( /* webpackChunkName: "m-company" */ './views/admin/m-company.vue')
        // },
        {
          path: 'case',
          name: 'm-case',
          meta: {
            title: '我的案例管理'
          },
          component: () => import( /* webpackChunkName: "m-case" */ './views/admin/m-case.vue')
        },
        {
          path: 'contact',
          name: 'm-contact',
          meta: {
            title: '联系我们管理'
          },
          component: () => import( /* webpackChunkName: "m-contact" */ './views/admin/m-contact.vue')
        }
      ]
    },

  ],
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  const whiteList = ['m-banner','m-staff','m-product','m-company','m-case','m-contact']
  if (to.meta.title) {
    document.title = `${to.meta.title} | 安居门窗`
  }
  if (state.uid) {
    if(to.path === '/login') {
      // console.log('已登录，又访问login---------')
      next({
        path:'/admin'
      })
    }else {
      next()
    }
  } else {
    if (whiteList.some(item => item === to.name)) {
      next({
        path: '/login'
      })
      // console.log('这个页面是需要登录的')
    } else {
      next()
    }
  }
})
export default router