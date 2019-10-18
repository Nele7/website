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
                    <div class="list">
                        <el-row :gutter="10">
                            <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item,index) in homeProduct" :key="index">
                                <div class="list-item wow fadeInLeft animated" :style="animationDelay(index)">
                                    <img :src="item.accessImg" alt="">
                                    <div class="text">{{item.productName}}</div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="introduce">
                        产品介绍
                    </div>
                </div>
                <div class="content">
                    <main-title title="成功案例"></main-title>
                </div>
            </div>
            <div class="">

            </div>
        </main>
    </div>
</template>

<script>
import api from '@/api/'
import {ERR_OK,ERR_MSG} from '@/config/'
import Banner from '@/components/Banner'
import MainTitle from '@/components/MainTitle'
import { WOW } from 'wowjs'

export default {
    name: 'home',
    data() {
        return {
            homeProduct:[]
        }
    },
    components: {
        Banner,
        MainTitle
    },
    computed: {
        
    },
    mounted() {
        this._initWOW()
        this._getHomeProduct()
    },
    methods: {
        async _getHomeProduct() {
            try {
                let {code,data,msg} = await api.front.getHomeProduct()
                if(code === ERR_OK) {
                    this.homeProduct = data
                    console.log(data)
                }else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
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
}
</script>
<style lang="scss">
.home {
    position: relative;
}
.content {
    margin: 30px 0;
}
.wrapper {
    // margin-bottom: 30px;
}
.list {
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
    height: 400px;
    border: 1px solid;
}
</style>