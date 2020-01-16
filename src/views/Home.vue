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
                                <img src="../assets/img/img_05.jpg" alt="" width="100%" height="auto">
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="12" class="text-wrapper wow fadeInRight">
                                <div class="text">
                                    <p>
                                        折叠铝合金卷帘门
与普通卷帘门相比，无论是从外观、环保还是安全上，都拥有相当的优势。铝合金卷帘门可在其表面喷涂各种颜色及图案，更可覆膜上具有凹凸感的木纹、砂纹等，彰显高贵气质，明显提高您铺位的档次，让您在众多铺位中脱颖而出。
铝合金卷帘门的卷帘与众不同的材质和结构设计，可有效防止强光照射和紫外线辐射，完全解决阳光对室内产生的温室效应，适用于各种气候和天气的变化，对室内环境具有长期防护效果，经过试验表明卷帘门窗对阳光的遮挡率可达到100%，对温度的遮挡率可达到95%以上。
铝合金卷帘门一改传统卷帘门噪音大的固有缺点，打开或关闭过程仅有风吹落叶般的响声，给您一个舒适的开门感受。我国卷帘门供应商可以为您提供整套优质卷帘门。{注:(铝合金卷帘门设计之初就不是为了密封，只是在帘片中加了消音胶条密封性有所提高，但依然没有密封。)现有铝合金卷帘门帘片有两种铝合金中空挤压型材和铝合金填充聚氨酯发泡型材，挤压型帘片强度、硬度、制作宽度、防护性能都优于填充型材，可以依照客户不同需求来自由选择门体帘片的型材
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
                        <swiper-slide v-for="(item,index) in homeExamples" :key="index" class="swiper-slide1" @click="goExamples">
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
                                        曹县安居门窗有限公司成立于2019年，是一家集设计、生产、销售、服务为一体的知名实力派门窗企业。公司主要产品包括：别墅阳光房、中高档民用门窗、断桥铝合金门窗、玻璃幕墙、不锈钢门窗，以及铝包木和木包铝等复合门窗。产品具有环保、隔音、保暖、防盗、防蚊，抗风性和气密性好等优势特点，真正实现了美观与实用的和谐统一。 
    目前，公司厂房生产面积达到400多平米。为进一步提高产品品质，增强企业核心竞争力，公司不惜重金引进国际先进的高档产品和工艺技术，使产品生产达到了国内同行业先进水平。借助成熟的铝合金门窗市场及便利的物流渠道，加上自身对消费者需求和市场趋势的全面了解及强大的技术实力，安居门窗不断推出各种完美品质的新产品，致力于为广大顾客带来全新的生活体验，推动门窗市场的繁荣发展。 
    自成立以来，安居门窗本着“为客服提供优质生活及服务”的经营理念和“诚信、专业、高效”的服务宗旨，服务了包括政府大楼、别墅住房、新农村建设、高档小区，等进百家高档住宅区和政府、企事业单位。 
    随着中国市场的日益国际化，安居门窗也将不断地更新观念、开拓进取、推陈出新，一如既往的为广大新老客户提供最优质的产品和最完善的服务，让您真正“用的放心,住的安心”。欢迎广大新老客户来电、来函咨询、洽谈业务。
                                    </p>
                                </div>
                            </el-col>
                            <el-col class="wow zoomIn" :xs="24" :sm="24" :md="12">
                                <div style="padding:20px 0">
                                    <img src="../assets/img/img_06.jpg" alt="" width="100%" height="auto">

                                </div>
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
        goExamples() {
            this.$router.push('/examples')
        },
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