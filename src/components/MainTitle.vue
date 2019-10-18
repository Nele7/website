<template>
    <div class="m_title">
        <img src="@/assets/img/index9_03.png" alt="" class="line">
        <span>{{title}}</span>
        <img src="@/assets/img/index2_03_05.png" alt="" class="line">
        <p>安居专注中高端门窗8年，值得信赖的品牌</p>
    </div>
</template>

<script>
    export default {
        props:['title']
    }
</script>

<style lang="scss" scoped>
.m_title {
    text-align: center;
    span {
        font-size: 2.5rem;
        color:#f05865;
        padding: 0 10px;
    }
    p{
        margin: 15px 0;
        font-size: 1.3rem;
        color:#999999;
    }
}
@media only screen and (max-width: 767px){
    .m_title {
        .line {
            display: none;
        }
    }
}
</style>