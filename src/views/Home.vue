<template>
    <div class="home">
        <banner></banner>
        <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et, hic at quisquam possimus quod consectetur mollitia, minima fugit laborum magni veniam repellat corrupti dolorum odio, alias quos error nemo.</main>
    </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
    name: 'home',
    data() {
        return {
        }
    },
    components: {
        Banner
    },
    computed: {
        
    },
    mounted() {
    }
}
</script>
<style lang="scss">
.home {
    position: relative;
}
</style>