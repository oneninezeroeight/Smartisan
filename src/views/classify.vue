<template>
  <div>
    <Search></Search>
    <div class="category-container">
      <section class="left-wrap">
        <ul class="first-list">
          <li class="active">智能硬件</li>
          <li class>smartisan</li>
          <li class>鞋包服饰</li>
          <li class>畅呼吸</li>
          <li class>医药保健</li>
          <li class>电脑办公</li>
        </ul>
      </section>
      <section class="right-wrap">
        <section class="category-sub no-banner">
          <!---->
          <section data-v-1cfc70d2 class="banner-wrap">
            <div data-v-5079b9f0 data-v-1cfc70d2 class="index-swiper banner">
              <div data-v-5079b9f0 class="swiper-slide">
                <img
                  data-v-5079b9f0
                  src="https://resource.smartisan.com/resource/d86d3c67694cbd51ca4c2494afe7d462.jpg?x-oss-process=image/resize,w_750/format,webp"
                  alt="banner"
                  class="banner-img"
                />
              </div>
            </div>
          </section>
          <section class="second-and-third-list">
            <h1>坚果手机</h1>
            <aside class="list-flex-wrap">
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/06c2253354096f5e9ebf0616f1af2086.png"
                    src="https://resource.smartisan.com/resource/06c2253354096f5e9ebf0616f1af2086.png"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">坚果 R1</figcaption>
              </figure>
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/b07b9765e272f866da6acda4ee107d88.png"
                    src="https://resource.smartisan.com/resource/b07b9765e272f866da6acda4ee107d88.png"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">坚果 Pro 2S</figcaption>
              </figure>
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/13e91511f6ba3227ca5378fd2e93c54b.png"
                    src="https://resource.smartisan.com/resource/13e91511f6ba3227ca5378fd2e93c54b.png"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">坚果 3</figcaption>
              </figure>
            </aside>
          </section>
          <section class="second-and-third-list">
            <h1>数码配件</h1>
            <aside class="list-flex-wrap">
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg"
                    src="https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">数据线</figcaption>
              </figure>
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg"
                    src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">充电器</figcaption>
              </figure>
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/ce632bd67465027861707ec221b37c2d.jpg"
                    src="https://resource.smartisan.com/resource/ce632bd67465027861707ec221b37c2d.jpg"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">线控耳机</figcaption>
              </figure>
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/33954b3f6a2f1614c5482ef130af9cc8.jpg"
                    src="https://resource.smartisan.com/resource/33954b3f6a2f1614c5482ef130af9cc8.jpg"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">移动电源</figcaption>
              </figure>
              <figure class="flex-item">
                <div class="img-cover">
                  <img
                    alt="-"
                    data-src="https://resource.smartisan.com/resource/f55641e23f35f6dd82226b6c4a043f00.jpg"
                    src="https://resource.smartisan.com/resource/f55641e23f35f6dd82226b6c4a043f00.jpg"
                    lazy="loaded"
                  />
                </div>
                <figcaption class="title text-ellipsis">拍照配件</figcaption>
              </figure>
            </aside>
          </section>
        </section>
      </section>
    </div>
    <Tabbar :offset="1"></Tabbar>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import Tabbar from "../components/tabbar.vue";
export default {
  data() {
    return {
      goods: []
    }
  },
  methods: {
    getClassify(){
      let _self = this;
      this.axios.get('http://localhost:3000/classify').then(data=>{
        console.log(data);
        _self.goods = data.data.goods;
      })
    }
  },
  mounted() {
    this.getClassify();
  },
  components: {
    Search,
    Tabbar
  }
};
</script>

<style scoped>
.category-container {
  position: relative;
  width: 100%;
  height: 100%;
  height: calc(100% - 2.4rem);
  padding-left: 4rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.category-container .left-wrap,
.category-container .right-wrap {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.category-container .left-wrap {
  position: absolute;
  left: 0;
  height: 100%;
  width: 5rem;
  -webkit-box-shadow: 1px 0 0 hsla(0, 0%, 40%, 0.1);
  box-shadow: 1px 0 0 hsla(0, 0%, 40%, 0.1);
  padding: 1.35rem 0.3rem 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 2;
}
.category-container .right-wrap {
  width: 17rem;
  margin: 0 0 0 2rem;
}
.first-list {
  text-align: center;
}
.first-list li.active {
  color: #d44d44;
  background: #f6ebea;
  border-radius: 0.2rem;
}
.first-list li {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.6rem;
  margin-bottom: 1.4rem;
  font-weight: 700;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 0.9rem;
  padding: 0.16rem 0.4rem 0.14rem;
}
.category-container .left-wrap,
.category-container .right-wrap {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.category-container .right-wrap {
  height: 100%;
}
.banner-wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 1.9rem 0px;
}
.banner-wrap .banner {
  height: 4.85rem;
}
.index-swiper {
  position: relative;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
}
.banner-wrap .banner.swiper-slide {
  box-sizing: border-box;
  padding: 0px 0.6rem;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform, -webkit-transform;
}
.banner-img {
  border-radius: 0.6rem;
}
.banner-img {
  width: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 3;
}
.category-container .category-sub:nth-child(n + 1) {
  -webkit-box-shadow: 0 1px 0 hsla(0, 0%, 40%, 0.1);
  box-shadow: 0 1px 0 hsla(0, 0%, 40%, 0.1);
}
.category-container .no-banner .second-and-third-list {
  border-top: 0;
}
.second-and-third-list h1 {
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  font-weight: 700;
  line-height: 2.75rem;
  margin-left: 1rem;
}
.list-flex-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 0 0.4rem;
}
.list-flex-wrap .flex-item {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.333%;
  flex: 0 0 33.333%;
  padding: 0 0.15rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
figure {
  margin: 0;
}
.second-and-third-list .img-cover {
  height: 6.1rem;
  border-radius: 0.4rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
}
.second-and-third-list .img-cover img {
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply;
}
img {
  width: 100%;
}
img {
  border: 0;
}
.second-and-third-list .title {
  color: #333;
  text-align: center;
  font-size: 0.5rem;
  font-weight: 700;
  margin-top: 0.25rem;
}

.text-ellipsis {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>