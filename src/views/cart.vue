<template>
  <div>
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <section _ngcontent-c0 class="main-wrapper is-header-shown is-bottom-shown">
      <router-outlet _ngcontent-c0></router-outlet>
      <shopping-cart-mobile _nghost-c8 class>
        <!---->
        <div _ngcontent-c8 class="page-cart no-goods">
          <!---->
          <div _ngcontent-c8 class="hide-warranty">
            <!---->
            <div _ngcontent-c8 class="empty-container">
              <div _ngcontent-c8>
                <div _ngcontent-c8 class="img-container"></div>
                <h3 _ngcontent-c8>购物车暂无商品</h3>
                <p _ngcontent-c8>添加到购物车的商品将会显示在这里</p>
                <!---->
                <a _ngcontent-c8 class="buy-btn login" v-if="!isLogin" @click="gotoLogin">登录</a>
                <a _ngcontent-c8 class="buy-btn box-border" @click="gotoIndex">现在选购</a>
              </div>
            </div>
            <!---->
          </div>
          <!---->
          <dialog-prompt _ngcontent-c8 _nghost-c5 class="ng-tns-c5-4">
            <modal-container _ngcontent-c5 class="ng-tns-c5-4 ng-tns-c7-6" _nghost-c7>
              <div
                _ngcontent-c7
                class="modal-wrap ng-trigger ng-trigger-animationState"
                style="opacity: 0; display: none;"
              >
                <div
                  _ngcontent-c7
                  class="shadow ng-trigger ng-trigger-animationState"
                  style="opacity: 0; display: none;"
                ></div>
                <div
                  _ngcontent-c7
                  class="container ng-trigger ng-trigger-animationStateNone"
                  style="opacity: 0; display: none;"
                >
                  <div _ngcontent-c5 class="dialog ng-tns-c5-4">
                    <div _ngcontent-c5 class="title">提示</div>
                    <div _ngcontent-c5 class="content">
                      <p _ngcontent-c8 class="dialog-confirm-text">确认要删除这 0 件商品吗？</p>
                    </div>
                    <div _ngcontent-c5 class="button-wrapper">
                      <!---->
                      <button
                        _ngcontent-c5
                        class="button-cancel ng-trigger ng-trigger-buttonClick ng-tns-c5-4"
                        style="display: inline;"
                      >取消</button>
                      <button
                        _ngcontent-c5
                        class="button-confirm ng-trigger ng-trigger-buttonClick"
                      >确认</button>
                    </div>
                  </div>
                </div>
              </div>
            </modal-container>
          </dialog-prompt>
          <item-board _ngcontent-c8 _nghost-c13 class="ng-tns-c13-5">
            <div _ngcontent-c13 class="ng-tns-c13-5">
              <div
                _ngcontent-c13
                class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
                style="background-color: rgba(0, 0, 0, 0.8); display: none;"
              ></div>
              <div
                _ngcontent-c13
                class="item-board ng-trigger ng-trigger-itemBoardAnimate"
                style="display: none;"
              >
                <!---->
              </div>
            </div>
          </item-board>
        </div>
        <item-board _ngcontent-c8 class="item-coupon ng-tns-c13-3" _nghost-c13>
          <div _ngcontent-c13 class="ng-tns-c13-3">
            <div
              _ngcontent-c13
              class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
              style="background-color: rgba(0, 0, 0, 0.8); display: none;"
            ></div>
            <div
              _ngcontent-c13
              class="item-board ng-trigger ng-trigger-itemBoardAnimate"
              style="display: none;"
            >
              <div _ngcontent-c8 class="item-board-content">
                <cart-coupon _ngcontent-c8 _nghost-c15>
                  <div _ngcontent-c15 class="coupon-dialog">
                    <div _ngcontent-c15 class="fix-header-tabbox box-line">
                      <div _ngcontent-c15 class="header-tabbox box-line">
                        <div _ngcontent-c15 class="button button-hide">说明</div>
                        <ul _ngcontent-c15 class="box-border">
                          <li _ngcontent-c15 class="box-line line-vertical active">
                            <span _ngcontent-c15>可领券（0）</span>
                            <a _ngcontent-c15 class="active-area"></a>
                          </li>
                          <li _ngcontent-c15 class="box-line line-vertical">
                            <span _ngcontent-c15>已领券（0）</span>
                            <a _ngcontent-c15 class="active-area"></a>
                          </li>
                        </ul>
                        <div _ngcontent-c15 class="button">取消</div>
                      </div>
                    </div>
                    <div _ngcontent-c15 class="coupon-list">
                      <!---->
                      <!---->
                      <div _ngcontent-c15 class="noCoupon">
                        <img
                          _ngcontent-c15
                          src="data:image/png;base64,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"
                        />
                        <label _ngcontent-c15>暂无可领优惠券</label>
                      </div>
                      <!---->
                    </div>
                  </div>
                </cart-coupon>
              </div>
            </div>
          </div>
        </item-board>
      </shopping-cart-mobile>
    </section>

    <Tabbar :offset="2"></Tabbar>
  </div>
</template>

<script>
import Header2 from "../components/Header2.vue";
import Tabbar from "../components/tabbar.vue";
export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    gotoLogin(){
      this.$router.push('login');
      console.log('gotoLogin')
    },
    gotoIndex(){
      this.$router.push('/');
      console.log('gotoIndex')
    }
  },
  created: function(){
    let isLogin = this.$store.getters.isLogin;
    if(isLogin){
      this.isLogin = true
      console.log('this is cart');
      let cart = JSON.parse(localStorage.getItem('cart'));    //获取购物车商品信息id+num
      let count = cart.length;
      console.log(typeof cart,cart,count);
      if(count>0){
        
      }
    }
  },
  components: {
    Header2,
    Tabbar
  }
};
</script>

<style scoped>
header {
  height: 3.2rem;
  padding: 0 10px;
  font-size: 18px;
  line-height: 20px;
}
.main-wrapper.is-header-shown[_ngcontent-c0] {
    margin-top: 50px;
}

.main-wrapper.is-bottom-shown[_ngcontent-c0] {
    padding-bottom: 54px;
}


.main-wrapper[_ngcontent-c0] {
    overflow: scroll;
}
.page-cart.no-goods[_ngcontent-c8] {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-size: 100%; */
    background: #ededed;
}

.page-cart[_ngcontent-c8] {
    overflow: hidden;
}
.empty-container[_ngcontent-c8] {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.empty-container[_ngcontent-c8] .img-container[_ngcontent-c8] {
    width: 88px;
    height: 114px;
    background: url('../assets/images/icart.png') no-repeat top;
    background-size: 88px auto;
    margin: 0 auto;
}
.empty-container[_ngcontent-c8] h3[_ngcontent-c8] {
    color: rgba(0,0,0,.15);
    margin: 25px 0 9px;
    font-size: 1rem;
}
.empty-container[_ngcontent-c8] p[_ngcontent-c8] {
    font-size: .65rem;
    text-align: center;
    color: rgba(0,0,0,.15);
}
.empty-container[_ngcontent-c8] .buy-btn.login[_ngcontent-c8] {
    box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
    background: #5e8bdd;
    background: linear-gradient(#6f94e8,#5178df);
    border-radius: 6px;
    text-shadow: 0 -1px 0 rgba(0,0,0,.15);
    color: #fff;
}

.empty-container[_ngcontent-c8] .buy-btn[_ngcontent-c8] {
    display: inline-block;
    width: 142px;
    height: 40px;
    z-index: 9999;
    line-height: 40px;
    font-size: .6rem;
    font-weight: 700;
    color: rgba(0,0,0,.6);
    margin: 16px 1px 0;
    background: linear-gradient(rgba(0,0,0,.01),hsla(0,0%,100%,.01));
    box-shadow: inset 0 2px 4px hsla(0,0%,100%,.3);
}

a[_ngcontent-c8] {
    color: #5079d9;
    text-decoration: none;
}
.empty-container[_ngcontent-c8] .buy-btn[_ngcontent-c8]{
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,.12);
}
.box-border:before {
    /* content: ""; */
    position: absolute;
    top: 0;
    bottom: -42.85714%;
    left: 0;
    right: -42.85714%;
    /* border: 1px solid #f0f0f0; */
    -webkit-transform: scale(.7);
    transform: scale(.7);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
</style>