<template>
    <el-menu
        default-active="/admin/banner"
        class="el-menu-vertical-demo"
        background-color="#324057"
        text-color="#fff"
        active-text-color="rgb(32, 160, 255)"
        router
        style="height:100%"
    >
        <el-menu-item index="/admin/banner">
            <i class="el-icon-document"></i>
            <span slot="title">轮播模块管理</span>
        </el-menu-item>
        <el-menu-item index="/admin/staff">
            <i class="el-icon-menu"></i>
            <span slot="title">人员模块管理</span>
        </el-menu-item>
        <el-submenu index="/admin/product">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>产品模块管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/admin/product">
                    <i class="el-icon-notebook-1"></i>
                    <span slot="title">产品</span>
                </el-menu-item>
                <el-menu-item index="/admin/productCategory">
                    <i class="el-icon-shopping-bag-2"></i>
                    <span slot="title">产品分类</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="/admin/product">
            <i class="el-icon-menu"></i>
            <span slot="title">产品模块管理</span>
        </el-menu-item> -->
        <!-- <el-menu-item index="/admin/company">
            <i class="el-icon-menu"></i>
            <span slot="title">我的公司管理</span>
        </el-menu-item> -->
        <el-menu-item index="/admin/case">
            <i class="el-icon-files"></i>
            <span slot="title">我的案例管理</span>
        </el-menu-item>
        <el-menu-item index="/admin/contact">
            <i class="el-icon-office-building"></i>
            <span slot="title">联系我们管理</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>