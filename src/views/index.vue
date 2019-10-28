<template>
  <div>
    <Header></Header>
    <Search></Search>
    <Swiper/>
    <Panel></Panel>
    <BackToTop />
    <Tabbar :offset='0'></Tabbar>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Search from "../components/Search.vue";
import Swiper from "../components/Swiper.vue";
import Panel from "../components/Panel.vue";
import Tabbar from "../components/tabbar.vue";
import BackToTop from "../components/BackToTop.vue"

export default {
  data(){
    return {

    }
  },
  components:{
    Header,
    Search,
    Swiper,
    Panel,
    Tabbar,
    BackToTop
  }
}
</script>