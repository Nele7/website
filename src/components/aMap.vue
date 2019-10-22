<template>
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-marker
            vid="component-marker"
            :position="center"
            animation="AMAP_ANIMATION_BOUNCE"
        ></el-amap-marker>
    </el-amap>
</template>

<script>
    export default {
        data() {
            return {
                center: [115.470604,34.884755],
                zoom: 14,
            }
        },
    }
</script>

<style>
.amap-logo,
.amap-toolbar,
.amap-copyright {
    display: none!important;
}

</style>
<style lang="scss" scoped>
.amap-demo {
    height: 400px;
}
</style>