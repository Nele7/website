<template>
    <header>
        <div class="navbar" :class="{nav_down:scrollEvent}" ref="navbar">
            <div class="container">
                <div class="top">
                    <a href="#" class="logo">山东曹县安居门窗</a>
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
                    <div class="mobile_nav" id="mobile_nav">
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
            open: false,
            scrollEvent:false
        }
    },
    mounted() {
        this._initWOW()
        if (document.addEventListener) {
            // document.addEventListener('DOMMouseScroll', this.scrollFunc, false);
            window.addEventListener("scroll", this.scrollFunc,false)
        }
        // window.onmousewheel = document.onmousewheel = this.scrollFunc;
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
        },
        scrollFunc(e) {
            // var clients = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            // 这里存在兼容问题，会把body当成div来处理，如果用document.body.scrollHeight就得不到正确的高度，用body时需要把doctype后面的html去掉
            // 这里没用body，而是用到documentElement
            // var wholeHeight = document.documentElement.scrollHeight;
            // if (clients + scrollTop >= wholeHeight) {
                // console.log("我到底部了");
                // 在实际应用中可以通过请求后台获取下一页的数据，然后显示到当前位置，就能达到按页加载的效果。
            // }
            var scrollTop = document.documentElement.scrollTop;
            this.scrollEvent = true
            if (scrollTop === 0) {
              this.scrollEvent = false
                // console.log("我到顶部了");
            }
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
    transition: background 0.3s;
    &.nav_down {
        .logo {
            color: #000;
        }
        background: hsla(0, 0%, 100%, 0.5);
        box-shadow: 0 0 5px #888;
        backdrop-filter: blur(5px);
        .nav {
            > li {
                > a {
                    color: #000;
                }
            }
        }
    }
    .logo {
        display: inline-block;
        // background: url("https://www.fsxhs.com/img/t_logo.png") top;
        height: 48px;
        width: 200px;
        line-height: 48px;
        color: #fff;
        font-size: 2rem;
    }

    .nav {
        float: right;
        height: 50px;
        line-height: 50px;
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
                    bottom: 12px;
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
                padding: 10px;
                border-bottom: 1px solid rgba(171, 199, 226, 0.4);
                > a {
                    display: block;
                    color: #fff;
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