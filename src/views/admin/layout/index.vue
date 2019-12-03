<template>
    <el-container style="height:100%">
        <el-header class="n_header">
           <nav-bar/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <side-bar/>
            </el-aside>
            <el-main>
                <app-main/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import {navBar, sideBar, appMain} from './index'
export default {
     components:{
        navBar, sideBar, appMain
    }
}
</script>

<style lang="scss" scoped>
.n_header{
    background: #324057;
    box-shadow: 0 2px 2px #ccc;
}
</style>