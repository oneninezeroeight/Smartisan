import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isLogin: false
  },
  getters:{
    isLogin: state => state.isLogin
  },
  mutations:{
    isLogin(state,msg){
      state.isLogin = msg;
      // this.setToken('isLogin',msg);
      localStorage.setItem('isLogin',JSON.stringify(msg));
    }
  }
 /*  actions:{
    setUser({commit},flag){
      commit('userStatus',flag)
    }
  } */
})