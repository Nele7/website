<template>
    <div id="ind_banner" ref="ind_banner">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- <swiper-slide class="slide-1" style="background-image:url(https://www.fsxhs.com/db_picture/pro3/201807200826074660.jpg)">
            </swiper-slide> -->
            <swiper-slide class="slide" v-for="item in bannerList" :key="item.id" :style="bannerURL(item.slideshowImg)">
                <div class="name">
                    <span 
                    v-for="(item,index) in name" :key="index"
                    :style="animationDelay(index)"
                    class="wow fadeInDown animated"
                    >{{item}}</span>
                </div>
                <p>专注门窗8年，提供产品与技术的服务，值得信赖的品牌</p>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from '@/api/'
import {ERR_OK,ERR_MSG} from '@/config/'
import { WOW } from 'wowjs'

export default {
    name: 'banner',
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                effect: 'fade',
                spaceBetween: 30,
            },
            bannerList:[],
            name:'山东曹县安居卷帘门厂'
        }
    },
    mounted() {
        this._initWOW()
        
        this._getBanner()
    },
    computed: {
        
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
        async _getBanner() {
            try {
                let {code,data,msg} = await api.front.getBanner()
                if(code === ERR_OK) {
                    this.bannerList = data
                }else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
        bannerURL(url) {
            return `background-image:url(${url})`
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
        }
    },
    components: {
        swiper,
        swiperSlide,
    },
}
</script>

<style lang="scss" scoped>
#ind_banner {
    height: 100vh;
    /deep/.swiper-container {
        height: 100%;
    }
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    &.slide {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .name {
            font-size: 5rem;
            color: #fff;
            font-weight: bold;
            text-shadow: 5px 2px 6px #000;
            letter-spacing: 5px;
        }
        p {
            margin-top: 15px;
            color:#fff;
            font-size: 1.3rem;
            text-shadow: 5px 2px 6px #000;
        }
    }
    // &.slide-1 {
    //     background-image: url('https://www.fsxhs.com/db_picture/pro3/201807200826074660.jpg');
    // }
    // &.slide-2 {
    //     background-image: url('https://www.fsxhs.com/db_picture/pro3/201807200838188870.jpg');
    // }
}
@media screen and (max-width: 767px){
  .swiper-slide{
      &.slide {
          .name {
              font-size: 2.5rem;
          }
          p {
              font-size: 1rem;
          }
      }
  }
}
</style>