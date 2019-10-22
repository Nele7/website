<template>
    <div class="examples-wrapper">
        <bg-title :index="1"></bg-title>
        <div class="container">
            <div class="list" v-if="examplesList.length > 0">
                <div class="list-item2 wow fadeInLeft" v-for="(item,index) in examplesList" :key="index">
                    <el-row>
                        <el-col :md="18" :sm="24" :xs="24">
                            <div class="img-box">
                                <img :src="item.adhibitionImg" alt="">
                            </div>
                        </el-col>
                        <el-col :md="6" :sm="24" :xs="24">
                            <div class="info-box">
                                <h3>{{item.adhibitionHeadline}}</h3>
                                <p>{{item.adhibitionRemark}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { WOW } from 'wowjs'
import BgTitle from '@/components/BgTitle'
import api from '@/api/'
import {ERR_OK,ERR_MSG} from '@/config/'
    export default {
        data() {
            return {
                examplesList:[]
            }
        },
        mounted() {
            this._initWOW()
            this._getSuccessExamples()
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
            async _getSuccessExamples() {
                try {
                    let {code,data,msg} = await api.front.getSuccessExamples()
                    if(code === ERR_OK) {
                        this.examplesList = data.dataList
                        console.log(data)
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            }
        },
        components: {
            BgTitle
        }
    }
</script>

<style lang="scss" scoped>
.list {
    .list-item2 {
        padding: 20px 0;
        .img-box {
            height: 460px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                transition:all .8s;
                
                &:hover {
                    transform: scale(1.2)
                }
            }
        }
        .info-box {
            padding: 20px;
            // height: 460px;
            box-sizing: border-box;
            h3 {
                font-size: 2.4rem;
                font-weight: 400;
                margin-bottom: 20px;
            }
        }
    }
}
</style>