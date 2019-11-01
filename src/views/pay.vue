<template>
  <div>
    <mt-header title="支付中心">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="code">
      <img :src="codeImage" alt="">
    </div>
  </div>
</template>

<script>
import codeImage from '../assets/images/wechatpay.png'
export default {
  data() {
    return {
      codeImage: codeImage
    }
  },
};
</script>

<style scoped>
header {
  height: 3.2rem;
  padding: 0 10px;
  font-size: 18px;
  line-height: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
}
.code{
  width: 100vw;
  height: 140vw;
  margin-top: 3.2rem;
}
.code img{
  width: 100%;
  height: 100%;
  margin: 0 auto;
 
}
</style>