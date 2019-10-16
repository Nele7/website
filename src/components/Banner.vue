<template>
    <div id="ind_banner" ref="ind_banner">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-slide">
            <swiper-slide class="slide">
                <!-- <page1 /> -->
                <div class="slide-1">
                    <img src="https://www.fsxhs.com/db_picture/pro3/201807200826074660.jpg" alt />
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="slide-2">
                    <img src="https://www.fsxhs.com/db_picture/pro3/201807200838188870.jpg" alt />
                </div>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
            }
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
    components: {
        swiper,
        swiperSlide,
        // page1
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
        background: #fff;
    }
}
</style>