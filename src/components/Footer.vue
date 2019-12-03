<template>
    <footer class="footer">
        <div class="container">
            <div class="fot_panel">
                <div class="foot_copy">
                    Copyright © {{year}} 菲尼斯门窗 Inc. All rights reserved
                    <!-- <br> -->
                    <!-- <img src="../assets/img/beian.png" alt="">
                    蜀ICP备11012382号-4 -->
                    <a href="">曹县安居门窗</a>
                </div>
                <div class="service">
                    <a href="#">服务热线：15054036680 或 15275043688</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                year: new Date().getFullYear()
            }
        },
    }
</script>

<style lang="scss" scoped>
.footer {
    background: #2B2B2B;
    color: #868686;
    width: 100%;
}
.fot_panel {
    padding: 10px 0;
    > div {
        text-align: center;
        font-size: 1.4rem;
        margin: 10px 0;
        line-height: 25px;
        > a {
            color: #868686;
            &:hover {
                color:#ca2b39;
            }
        }
    }
}
</style>