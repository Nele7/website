<template>
    <div class="superiority-wrapper">
        <bg-title :index="2"></bg-title>
        <div class="container">
            <div class="card">
                <div class="title">
                    <main-title title="在职员工"></main-title>
                </div>
                <div class="list">
                    <el-row :gutter="50">
                        <el-col :md="6" class="list-item1" v-for="(item,index) in satffList" :key="index">
                            <div class="content-card">
                                <div class="avatar">
                                    <img :src="item.staffImg" alt="">
                                </div>
                                <p class="name">{{item.staffName}}</p>
                                <p class="desc">{{item.staffPost}}</p>
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
import MainTitle from '@/components/MainTitle'
import api from '@/api/'
import {ERR_OK,ERR_MSG} from '@/config/'
    export default {
        data() {
            return {
                satffList:[]
            }
        },
        mounted() {
            this._initWOW()
            this._getSatff()
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
            async _getSatff() {
                try {
                    let {code,data,msg} = await api.front.getSatff()
                    if(code === ERR_OK) {
                        this.satffList = data.dataList
                        // console.log(data)
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            }
        },
        components: {
            BgTitle,
            MainTitle
        }
    }
</script>

<style lang="scss" scoped>
.card {
    padding: 20px 0;
}
.list-item1 {
    margin-bottom: 30px;
}
.content-card {
    padding:20px;
    text-align: center;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,.1);
    // border:1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.8s;
    cursor: pointer;
    &:hover{
        transform: translateY(-6px);
        box-shadow: 1px 4px 10px 2px #CCC;
    }
    .avatar {
        img {
            display: block;
            width: 140px;
            height: 140px;
            margin: 0 auto;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    .name {
        font-size: 2rem;
        margin: 15px 0 10px 0;
    }
    .desc {
        line-height:25px;
        color:#999;
    }
}
</style>