import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isLogin: false,
    isBuyNow: false,
    isAddToCart: false
  },
  getters:{
    isLogin: state => state.isLogin,
    isBuyNow: state => state.isBuyNow,
    isAddToCart: state => state.isAddToCart
  },
  mutations:{
    isLogin(state,msg){
      state.isLogin = msg;
      // this.setToken('isLogin',msg);
      localStorage.setItem('isLogin',JSON.stringify(msg));
    },
    isBuyNow(state,msg){
      state.isBuyNow = msg;
      // this.setToken('isLogin',msg);
      // localStorage.setItem('isLogin',JSON.stringify(msg));
    },
    isAddToCart(state,msg){
      state.isAddToCart = msg;
      // this.setToken('isLogin',msg);
      // localStorage.setItem('isLogin',JSON.stringify(msg));
    }
  }
 /*  actions:{
    setUser({commit},flag){
      commit('userStatus',flag)
    }
  } */
})