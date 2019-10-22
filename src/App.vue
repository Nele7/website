<template>
    <div id="app" v-cloak>
        <v-header />
        <!-- <transition name="fade"> -->
            <keep-alive>
                <router-view />
            </keep-alive>
        <!-- </transition> -->
        <v-footer></v-footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    components: {
        'v-header': Header,
        'v-footer': Footer,
    }
}
</script>

<style lang="scss">
#app {
    font-family: "微软雅黑", "Microsoft YaHei", "SimSun", "宋体" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    // background: #fafafa;
    height: 100%;
    // position: relative;
}
</style>
