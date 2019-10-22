<template>
    <div class="about-wrapper">
        <bg-title :index="3"></bg-title>
        <div class="container">
            <div class="form-wrapper">
                <el-row :gutter="20">
                    <el-col :md="12" :sm="24" :xs="24">
                        <div class="cover-img">
                            <img src="http://www.phoenx.cn/_20191006/1712092387.jpg" alt="" width="100%">
                        </div>
                    </el-col>
                    <el-col :md="12" :sm="24" :xs="24">
                        <div class="right">
                            <h3>联系安居门窗</h3>
                            <p v-for="(item,index) in info" :key="index" class="wow fadeInRight" :data-wow-delay="`${(index+1)/2}s`">
                                <em>{{item.name}}</em>
                                {{item.number}}
                            </p>
                            <h3>在线咨询</h3>
                            <form>
                                <p>
                                    <em>您的姓名</em>
                                    <input type="text" v-model="form.userName">
                                </p>
                                <p>
                                    <em>您的手机</em>
                                    <input type="phone" v-model="form.phone">
                                </p>
                                <p>
                                    <em class="cont">咨询内容</em>
                                    <textarea name="" id="" cols="30" rows="3" v-model="form.remark"></textarea>
                                </p>
                            </form>
                            <div class="btn-w">
                                <button type="button" @click="handleBtn">提交咨询</button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="map-wrapper">
                <h3>
                    <span>
                        <span>公司位置</span>
                        <small> / Company Location</small>
                    </span>
                </h3>
                <aMap></aMap>
            </div>
        </div>
        
    </div>
</template>

<script>
import { WOW } from 'wowjs'
import BgTitle from '@/components/BgTitle'
import aMap from '@/components/aMap'
import api from '@/api/'
import {ERR_OK,ERR_MSG} from '@/config/'
    export default {
        data() {
            return {
                info:[
                    {
                        name:'电话',
                        number:'0757-85659078'
                    },
                    {
                        name:'手机',
                        number:'15054036680 或 15275043688'
                    },
                    {
                        name:'微信',
                        number:'15054036680'
                    },
                    {
                        name:'地址',
                        number:'山东省菏泽市曹县倪集镇石庄村庄安居卷帘门厂有限责任公司'
                    },
                ],
                form:{
                    userName:'',
                    phone:'',
                    remark:''
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
            },
            handleBtn() {
                this._setInfo()
            },
            async _setInfo() {
                try {
                    let {code,data,msg} = await api.front.addInfo({
                        ...this.form
                    })
                    if(code === ERR_OK) {
                        this.$message.success(msg)
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
            BgTitle,
            aMap
        }
    }
</script>

<style lang="scss" scoped>
.form-wrapper {
    
}
.map-wrapper {
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
}
.right {
    padding: 20px 0;
    box-sizing: border-box;
    font-size: 1.7rem;
    .btn-w {
        button {
            outline: none;
            border: none;
            padding: 10px 42px;
            background: #e60012;
            color: #F0F0F0;
        }
    }
    h3 {
        font-size: 2rem;
        color: #e60012;
        margin-bottom: 15px;
    }
    p {
        line-height: 20px;
        margin-bottom: 15px;
        font-size: 1.6rem;
        em {
            display: inline-block;
            background: #F0F0F0;
            padding:4px 14px;
            font-size: 1.3rem;
            // width: 74px;
            box-sizing: border-box;
            text-align: center;
            margin-right: 5px;
            vertical-align:middle;
            &.cont {
                vertical-align:top;
            }
        }
        input {
            outline: none;
            border: 1px solid rgba(0,0,0,0.1);
            height: 25px;
        }
        textarea {
            resize: none;
            outline: none;
            border: 1px solid rgba(0,0,0,0.1)
        }
        &:last-child{
            margin-bottom: 0;
        }
    }
}
</style>