<template>
    <div class="page">
        <v-header />
        <div class="view">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <!-- <transition name="fade"> -->

        <!-- </transition> -->
        <v-footer />
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

<style lang="scss" scoped>
.page {
    display: flex;
    height: 100%;
    flex-direction: column;
    .view {
        flex:1 0 auto;
    }
}
</style>