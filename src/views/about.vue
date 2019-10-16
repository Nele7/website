<template>
    <div>
        <bg-title :index="3"></bg-title>
    </div>
</template>

<script>
import { WOW } from 'wowjs'
import BgTitle from '@/components/BgTitle'
    export default {
        data() {
            return {
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
            }
        },
        components: {
            BgTitle
        }
    }
</script>

<style lang="scss" scoped>
</style>