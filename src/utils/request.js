import axios from 'axios'
import {baseURL} from '@/config/'
const front = axios.create({
    baseURL,
    timeout:2000
})
const back = axios.create({
    baseURL,
    timeout:2000
})

back.interceptors.request.use(config => {

})

instance.interceptors.response.use(response => {

})

export const front
export const back
    