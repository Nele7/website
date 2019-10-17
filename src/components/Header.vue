<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="top">
          <a href="#" class="logo"></a>
          <ul class="nav">
            <li
              class="wow fadeInLeft animated"
              v-for="(item,index) in navList"
              :key="index"
              :style="`animation-delay: 0.${index+1}s;`"
            >
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
          <div class="nav_btn" @click="openSidebar" :class="{'nav_btn_open':open}">
            <span></span>
          </div>
          <div class="mobile_nav " id="mobile_nav">
            <ul>
              <li
                class="wow fadeInRight animated"
                v-for="(item,index) in navList"
                :key="index"
              >
                <a href="#" @click="goRouterPath(item.path)">{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { WOW } from 'wowjs'

export default {
  data() {
    return {
      navList: [
        { name: '首页', path: '/' },
        { name: '产品中心', path: '/product' },
        { name: '成功案例', path: '/examples' },
        { name: '公司优势', path: '/superiority' },
        { name: '了解我们', path: '/about' },
      ],
      open: false
    }
  },
  mounted() {
    this._initWOW()
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
    },
    openSidebar() {
      this.open = !this.open
    },
    goRouterPath(path) {
        this.open = false
        this.$router.push(path)
    }
  },
}
</script>

<style lang="scss" scoped>
.top {
  padding: 5px 0;
}
.navbar {
  position: fixed;
  height: 60px;
  background: transparent;
  z-index: 2;
  width: 100%;
  border-bottom: 1px solid rgba(171, 199, 226, 0.4);
  top: 0;

  .logo {
    display: inline-block;
    background: url("https://www.fsxhs.com/img/t_logo.png") top;
    height: 48px;
    width: 200px;
  }

  .nav {
    float: right;
    height: 60px;
    line-height: 60px;
    & > li {
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
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 15px;
          left: 0;
          background-color: #ff0014;
          transition: 0.4s ease-in-out;
          transform: scaleX(0);
          visibility: hidden;
        }
        &:hover {
          color: #ff0014;
          &:after {
            visibility: visible;
            transform: scaleX(1);
          }
        }
      }
    }
  }
  .nav_btn {
    float: right;
    transition: all 0.6s;
    width: 40px;
    height: 40px;
    padding: 4px;
    position: relative;
    background: rgba(0, 0, 0, 0.3);
    display: none;
    cursor: pointer;

    &.nav_btn_open {
      span {
        width: 0;
        background: #fff;
        &:before {
          top: 0;
          transform: rotate(45deg);
          background: #fff;
        }
        &:after {
          top: 0;
          transform: rotate(-45deg);
          background: #fff;
        }
      }
    }
    span {
      position: absolute;
      top: 50%;
      left: 13px;
      width: 22px;
      height: 2px;
      background: #fff;
      transition: 0.2s ease;
      &:before {
        content: "";
        position: absolute;
        top: -8px;
        left: 0;
        width: 22px;
        height: 2px;
        background: #fff;
        transition: transform 0.2s ease, top 0.2s ease;
      }
      &:after {
        content: "";
        position: absolute;
        top: 8px;
        left: 0;
        width: 22px;
        height: 2px;
        background: #fff;
        transition: transform 0.2s ease, top 0.2s ease;
      }
    }
  }
    
  .mobile_nav {
    display: none;
    margin-top: 6px;
    > ul {
        background: rgba(0, 0, 0, 0.7);
        > li {
            height: 30px;
            line-height: 30px;
            padding:10px;
            border-bottom: 1px solid rgba(171, 199, 226, 0.4);
            > a{
                display: block;
                color:#fff;
                font-size: 1.3rem;
            }
        }
    }
  }
}
@media screen and (max-width: 767px) {
  .nav {
    display: none;
  }
  .navbar {
    .nav_btn {
      display: block;
    }
    .nav_btn.nav_btn_open + .mobile_nav {
        display: block;
    }
  }
}

</style>