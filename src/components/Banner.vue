<template>
    <div id="ind_banner" ref="ind_banner">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="slide-1" style="background-image:url(https://www.fsxhs.com/db_picture/pro3/201807200826074660.jpg)">
            </swiper-slide>
            <swiper-slide class="slide-2">
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
    },
    methods: {
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
    background-size: 100% 100%;
    // &.slide-1 {
    //     background-image: url('https://www.fsxhs.com/db_picture/pro3/201807200826074660.jpg');
    // }
    &.slide-2 {
        background-image: url('https://www.fsxhs.com/db_picture/pro3/201807200838188870.jpg');
    }
}
</style>