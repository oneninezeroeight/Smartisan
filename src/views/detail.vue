<template>
  <div>
    <mt-header title="详情页xxxxxxxxxxxxxxx">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skuId: null
    }
  },
  created:function(){
    // console.log(this.$route);
    // const skuid = this.$route.params.skuid;
    const skuId = this.$route.query.skuId;
    console.log(skuId);
    this.axios.get(`http://localhost:3000/detail?skuId=${skuId}`).then(data=>{
      console.log(data);
    })
  },
  /* mounted() {
    const skuId = this.$route.query.skuId;
    console.log(skuId);
    this.axios.get(`http://localhost:3000/detail?skuId=${skuId}`).then(data=>{
      console.log(data);
    })
  }, */
};
</script>

<style scoped>
header {
  height: 3.2rem;
  padding: 0 10px;
  font-size: 18px;
  line-height: 20px;
}
</style>