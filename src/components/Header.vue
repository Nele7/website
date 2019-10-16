<template>
    <header>
        <div class="navbar">
            <div class="container">
                <a href="#" class="logo"></a>
                <ul class="nav">
                    <li
                        class="wow fadeInLeft"
                        v-for="(item,index) in navList"
                        :key="index"
                        :style="`animation-delay: 0.${index+1}s;`"
                    >
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
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
            ]
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
        }
    },
}
</script>

<style lang="scss" scoped>
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
        height: 60px;
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
}
</style>