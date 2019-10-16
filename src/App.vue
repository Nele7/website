<template>
    <div id="app" v-cloak>
        <v-header />
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view />
            </keep-alive>
        </transition>
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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #fafafa;
}
</style>
