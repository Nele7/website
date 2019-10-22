import apiService from '@/utils/httpUtil'

const front = (url,type = 'frontGet') => (params) => apiService[type](url,params)

const frontApi = {
    getBanner:front('/get/slideshow'),              // 获取轮播图
    getHomeProduct:front('/get/page/product'),      // 获取首页产品
    getHomeExamples:front('/get/page/case'),        // 获取首页成功案例
    getOneCategory: front('/get/product/stair'),    // 获取一级分类
    getTwoCategory: front('/get/product/access'),   // 获取二级分类
    getProduct: front('/get/product'),              // 获取产品
    getSuccessExamples: front('/get/case'),         // 获取成功案例
    getSatff:front('/get/myself/satff'),            // 获取公司优势
    addInfo:front('/set/connection/my'),            // 联系我们
}

export default frontApi