import Vue from 'vue'
// import Vuex from 'vuex'
import api from './api/'
import {ERR_MSG,ERR_OK} from './config/';
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     token:false
//   },
//   mutations: {

//   },
//   actions: {
//     userLogin({commit},userInfo) {
//       let _userInfo = {...userInfo}
//       return new Promise(async (resolve,reject) => {
//         try {
//           let {code,data,msg} = await api.back.signIn(_userInfo)
//           if(code === ERR_OK) {
//             console.log(data);
//             resolve('登录成功')
//           }else {
//             resolve(msg)
//           }
//         } catch (error) {
//           reject(ERR_MSG)
//         }
//       })
//     }
//   }
// })
// let uid = ''
// if (localStorage.getItem('__uid__')) {
//   uid = localStorage.getItem('__uid__')
// }
export const state = Vue.observable(
  {
    uid:sessionStorage.getItem('__uid__') || ''
  }
)
export const mutations = {
  changeUid(uid) {
    state.uid = uid
    sessionStorage.setItem('__uid__',uid)
  },
  cancelUid() {
    state.uid = ''
    sessionStorage.removeItem('__uid__')
  }
}