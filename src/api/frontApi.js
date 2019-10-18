import apiService from '@/utils/httpUtil'

const front = (url,type = 'frontGet') => (params) => apiService[type](url,params)

const frontApi = {
    getBanner:front('/get/slideshow'),              // 获取轮播图
    getHomeProduct:front('/get/page/product'),      // 获取首页产品
}

export default frontApi