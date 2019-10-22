<template>
    <div class="home">
        <banner></banner>
        <main>
            <div class="container">
                <div class="content">
                    <!-- <div class="m_title">
                        <img src="@/assets/img/index9_03.png" alt="">
                        <span>产品中心</span>
                        <img src="@/assets/img/index2_03_05.png" alt="">
                        <p>多利来专注高端门窗12年，值得信赖的品牌</p>
                    </div> -->
                    <main-title title="产品中心"></main-title>
                </div>
                <div class="wrapper">
                    <div class="list wow fadeInDown">
                        <el-row :gutter="10">
                            <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item,index) in homeProduct" :key="index">
                                <div class="list-item" @click="clickProduct">
                                    <img :src="item.accessImg" alt="">
                                    <div class="text">{{item.productName}}</div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="introduce">
                        <h3>
                            <span>
                                <span>产品介绍</span>
                                <small> / Product Introduction</small>
                            </span>
                        </h3>
                        <el-row :gutter="10">
                            <el-col class="wow zoomIn" :xs="24" :sm="24" :md="12">
                                <img src="../assets/img/cp_jieshao.jpg" alt="" width="100%" height="auto">
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="12" class="text-wrapper wow fadeInRight">
                                <div class="text">
                                    <p>
                                        世界上已经纳入各种标准的不锈钢有近100种，并且随着科技的进步和工农业的发展，新的不锈钢牌号还在不断增加。对于一种已知牌号的不锈钢，根据其化学成分可推算其铬当量[Cr]和镍当量[Ni]，再利用Schaeffler-Delong不锈钢组织图可大致估计该钢种的组织和性能
                                    </p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="content">
                    <main-title title="成功案例"></main-title>
                </div>
                <div class="last-wrapper">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in homeExamples" :key="index" class="swiper-slide1">
                            <div class="swiper-content" :style="`background-image:url(${item.adhibitionImg})`">
                                <p>{{item.adhibitionHeadline}}</p>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                    <div class="introduce">
                        <h3>
                            <span>
                                <span>公司介绍</span>
                                <small> / Company Introduction</small>
                            </span>
                        </h3>
                        <el-row :gutter="10">
                            <el-col :xs="24" :sm="24" :md="12" class="text-wrapper wow fadeInLeft">
                                <div class="text">
                                    <p>
                                        世界上已经纳入各种标准的不锈钢有近100种，并且随着科技的进步和工农业的发展，新的不锈钢牌号还在不断增加。对于一种已知牌号的不锈钢，根据其化学成分可推算其铬当量[Cr]和镍当量[Ni]，再利用Schaeffler-Delong不锈钢组织图可大致估计该钢种的组织和性能
                                    </p>
                                </div>
                            </el-col>
                            <el-col class="wow zoomIn" :xs="24" :sm="24" :md="12">
                                <img src="../assets/img/cp_jieshao.jpg" alt="" width="100%" height="auto">
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from '@/api/'
import {ERR_OK,ERR_MSG} from '@/config/'
import Banner from '@/components/Banner'
import MainTitle from '@/components/MainTitle'
import { WOW } from 'wowjs'

export default {
    name: 'home',
    data() {
        return {
            homeProduct:[],
            swiperOption: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                initialSlide:3,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier:1,
                    slideShadows : true
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            homeExamples:[]
        }
    },
    components: {
        Banner,
        MainTitle,
        swiper,
        swiperSlide
    },
    computed: {
        
    },
    mounted() {
        this._initWOW()
        this._getHomeProduct()
        this._getHomeExamples()
    },
    methods: {
        async _getHomeProduct() {
            try {
                let {code,data,msg} = await api.front.getHomeProduct()
                if(code === ERR_OK) {
                    this.homeProduct = data
                }else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
         _initWOW() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            })
            wow.init();
        },
        animationDelay(index) {
            let ind = index + 3
            let s
            if(ind >= 10) {
                s = ind / 10
            }else {
                s = `0.${ind}`
            }
            return `animation-delay: ${s}s;`
        },
        async _getHomeExamples() {
            try {
                let {code,data,msg} = await api.front.getHomeExamples()
                if(code === ERR_OK) {
                    this.homeExamples = data
                }else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
        clickProduct() {
            this.$router.push('/product')
        }
    },
}
</script>
<style lang="scss">
  .swiper-slide1 {
    
    width: 300px;
    height: 300px;
    .swiper-content {
        background-position: center;
        background-size: cover;
        height: 300px;
        position: relative;
        color:#fff;
        font-size: 1.6rem;
        p {
            position: absolute;
            top: 50%;
            width: 100%;
            text-align: center;
            text-shadow: 5px 2px 6px #000;
            height: 30px;
        }
    }
  }
.home {
    position: relative;
}
.content {
    margin: 30px 0;
}
.last-wrapper {
    padding-bottom: 30px;
}
.wrapper {
    // margin-bottom: 30px;
    
}
.list {
    margin-bottom: 10px;
    .list-item {
        position: relative;
        padding-bottom: 68%;
        width: 100%;
        overflow:hidden;
        margin-bottom: 10px;
        &:hover {
            img {
                transform:scale(1.2)
            }
            .text {
                &::after{
                    width: calc(100% - 20px)
                }
            }
        }

        img {
            position: absolute;
            top:0;
            right: 0;
            bottom: 0;
            left: 0;
            width:100%;
            height:auto;
            transition: all 0.5s;
            cursor: pointer;
            border-radius:4px;
        }
        .text {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            font-size: 2rem;
            background-image:linear-gradient(transparent,rgba(0,0,0,.5));
            padding: 10px;
            color: #fff;
            box-sizing: border-box;
            &::after {
                content: '';
                position: absolute;
                width: 13%;
                height: 2px;
                top: 0;
                left: 10px;
                background: #fff;
                transition: all 0.4s;
            }
        }
    }
}

.introduce {
    // height: 400px;
    > h3 {
        // font-size: 2.5rem;
        border-bottom: 2px solid #c7c7c7;
        height: 33px;
        line-height: 33px;
        margin: 20px 0;
        > span {
            display: inline-block;
            height: 33px;
            font-size: 1.8rem;
            border-bottom: 2px solid #f05865;
            color:#f05865;
            > small {
                font-size: 1.3rem;
            }
        }
    }
    .text-wrapper {
        .text {
            font-size: 1.7rem;
            line-height: 26px;
            color:#333;
            padding:20px;
            text-align: justify;
            text-indent: 20px;
        }
    }
    
}
</style>