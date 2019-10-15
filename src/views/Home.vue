<template>
  <div class="home">
    <header>
      <div class="navbar">
        <div class="header-wrapper">
          <a href="#" class="logo">
            <!-- <img src="https://www.fsxhs.com/img/t_logo.png" alt=""> -->
          </a>
          <ul class="nav">
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">案例</a>
            </li>
            <li>
              <a href="#">案例</a>
            </li>
            <li>
              <a href="#">案例</a>
            </li>
            <li>
              <a href="#">案例</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <page1/>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import page1 from './homePage1'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data() {
    return {
       swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
      }
    }
  },
  components:{
    swiper,
    swiperSlide,
    page1
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
  }
}
</script>
<style lang="scss">
.home {
  position: relative;
  .navbar {
    position: fixed;
    height: 60px;
    background: transparent;
    z-index: 2;
    width: 100%;
    border-bottom: 1px solid rgba(171, 199, 226, 0.4);

    .header-wrapper {
      margin: 0 auto;
      width: 1200px;
      height: 100%;
      color:#fff;
      .logo {
        display: inline-block;
        background:url('https://www.fsxhs.com/img/t_logo.png') top;
        height: 60px;
        width: 200px;
      }
      .nav {
        float: right;
        height: 60px;
        line-height: 60px;
        &>li {
          float: left;
          padding: 0 15px;
          > a {
            color: #fff;
            transition: all 0.3s;
            display: block;
            position: relative;
            text-align: center;
            font-size: 16px;
            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 15px;
              left: 0;
              background-color:#ff0014;
              transition:.4s ease-in-out;
              transform:scaleX(0);
              visibility:hidden;
            }
            &:hover {
              color:#ff0014;
              &:after {
                visibility: visible;
                transform:scaleX(1);
              }
            }
          }
        }
      }
    }
  }
}
</style>