<template>
  <div class="sub_banner" :style="bgImg">
    <h3 class="title wow zoomIn">{{title}}</h3>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  props: ['index'],
  data() {
    return {
      list:[
        {title:'产品中心',url:require('../assets/img/img_01.jpg')},
        {title:'成功案例',url:require('../assets/img/img_02.jpg')},
        {title:'公司优势',url:require('../assets/img/img_03.jpg')},
        {title:'关于我们',url:require('../assets/img/img_04.jpg')},
      ]
    }
  },
  mounted() {
    this._initWOW()
  },
  computed: {
    bgImg() {
      const url = this.list[this.index].url;
      const bgimg = `background-image:url(${url}`
      return bgimg
    },
    title() {
      return this.list[this.index].title
    }
  },
  methods: {
    _initWOW() {
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      })
      wow.init();
    }
  },
}
</script>

<style lang="scss" scoped>
.sub_banner {
  width: 100%;
  height: 490px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-weight: bold;
    font-size: 45px;
    color: #fff;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 175px;
      height: 3px;
      background-color: #fff;
      left: 0;
      bottom: -9px;
      text-shadow: 2px 2px 0 #646161;
    }
  }
}
</style>