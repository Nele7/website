<template>
    <div class="product-wrapper" :class="{sticky:list.length<= 4}">
        <bg-title :index="0"></bg-title>
        <div class="container">
            <div class="category-card">
                <ul>
                    <li class="name">分类</li>
                    <li class="item" 
                    v-for="(item,index) in oneCategory" :key="index"
                    :class="{active:one_index === index}"
                     @click="clickOneCategory(item.id,index)">
                        {{item.productName}}
                    </li>
                </ul>
                <ul>
                    <li class="name">分类</li>
                    <li class="item" 
                    v-for="(item,index) in twoCategory" :key="index"
                    :class="{active:two_index === index}"
                    @click="clickTwoCategory(item.id,index)"
                    >
                        {{item.accessName}}
                    </li>
                </ul>
            </div>
            <div class="category-list">
                <el-row :gutter="10">
                    <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item,index) in list" :key="index">
                        <div class="list-item">
                            <img :src="item.productImg" alt="" width="100%">
                        </div>
                        <p>{{item.productName}}</p>
                    </el-col>
                </el-row>
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
                oneCategory:[],
                twoCategory:[],
                one_index:0,
                two_index:-1,
                stairId:1,
                accessId:null,
                list:[]
            }
        },
        mounted() {
            this._initWOW()
            this._getOneCategory()
            this._getTwoCategory()
            this._getProduct()
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
            async _getOneCategory(){
                try {
                    let {code,data,msg} = await api.front.getOneCategory()
                    if(code === ERR_OK) {
                        this.oneCategory = data
                        
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            },
            async _getTwoCategory(){
                try {
                    let {code,data,msg} = await api.front.getTwoCategory({
                        stairId:this.stairId
                    })
                    if(code === ERR_OK) {
                        this.twoCategory = data
                        // console.log(data)
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            },
            // 点击一级分类
            clickOneCategory(id,index) {
                this.one_index = index
                this.stairId = id
                this._getTwoCategory()
            },
            clickTwoCategory(id,index) {
                this.two_index = index
                this.accessId = id
                this._getProduct()
            },
            async _getProduct() {
                try {
                    let {code,data,msg} = await api.front.getProduct({
                        stairId:this.stairId,
                        accessId:this.accessId
                    })
                    if(code === ERR_OK) {
                        this.list = data.dataList
                        // console.log('-----------------',data)
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
        },
        watch: {
            stairId(v) {
                this.two_index = -1
                this.accessId = null
                this._getProduct()
            }
        }
    }
</script>

<style lang="scss" scoped>

.category-card {
    ul {
        padding: 10px 0;
        overflow: hidden;
        li {
            float: left;
            padding: 10px 15px;
            font-size: 1.6rem;
            color: #474a4c;
            transition:all 0.3s;
            cursor: pointer;
            margin-right: 10px;
            &.name {
                background:#ff0014;
                color: #fff;
            }
            &.active {
                background: #eee;
                color: #000;
            }
            &.item {
                &:hover {
                    background: #eee;
                    color: #000;
                }
            }
        }
    }
}

.category-list {
    cursor: pointer;
    .list-item {
        position: relative;
        width: 100%;
        overflow: hidden;
        padding-bottom: 68%;
        
        img {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            transition: all 0.5s;
            &:hover {
                transform: scale(1.2)
            }
        }
    }
    p {
        font-size: 1.7rem;
        margin: 17px 0;
    }
}
</style>