import {front,back} from './request'
import qs from 'qs'

class ApiService {
    constructor() {}
    // 前台axios实例
    createFrontAxios(type, url, params) {
        let config = {
            method: type,
            url
        }
        if (type === 'get' || type === 'delete') {
            config.params = params
        } else {
            config.data = qs.stringify(params)
        }
        return new Promise((resolve, reject) => {
            front(config).then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    frontGet(url, params) {
        return this.createFrontAxios('get', url, params)
    }
    frontPost(url, params) {
        return this.createFrontAxios('post', url, params)
    }
    // 后台axios实例
    createBackAxios(type, url, params) {
        let config = {
            method: type,
            url
        }
        if (type === 'get' || type === 'delete') {
            config.params = params
        } else {
            config.data = qs.stringify(params)
        }
        return new Promise((resolve, reject) => {
            back(config).then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    backGet(url, params) {
        return this.createBackAxios('get', url, params)
    }
    backPost(url, params) {
        return this.createBackAxios('post', url, params)
    }
}

const apiService = new ApiService()

export default apiService