import axios from 'axios'
import { baseURL } from '@/config/'
import {state} from '@/store';
const front = axios.create({
    baseURL,
    timeout:2000
})
const back = axios.create({
    baseURL,
    timeout:2000
})

back.interceptors.request.use(config => {
    // console.log(config)
    const uid = state.uid;        
    uid && (config.headers.Authorization = uid);
    return config
})

back.interceptors.response.use(response => {
    return Promise.resolve(response)
})

export  {front,back}
// export const back
    