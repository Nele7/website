<template>
    <div>
        公司模块
        {{clock}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            clock: ''
        }
    },
    mounted() {
        this.countDown()
    },
    methods: {
        // 倒计时
        // 传入两个参数，第一个为起始时间，第二个为结束时间
        countDown(end) {
            // 获取当前的毫秒数，1572566400000
            const startTime = new Date().getTime()
            const endTime = new Date('2019-11-01 20:00').getTime()
            this.clock = this.date_format(endTime)
            // console.log((endTime-startTime)/1000)
        },
        // 补零方法
        fill_zero_prefix(num) {
            return num < 10 ? "0" + num : num
        },

        // 时间格式化输出，如03:25:19 86。每10ms都会调用一次
        date_format(micro_second) {
            var day = Math.floor(micro_second / (1000 * 60 * 60 * 24))
            // 秒数
            var second = Math.floor(micro_second / 1000);
            // 小时位
            var hr = Math.floor(second / 3600);
            // 分钟位
            var min = this.fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
            // 秒位
            var sec = this.fill_zero_prefix((second - hr * 3600 - min * 60)); // equal to => var sec = second % 60;
            // 毫秒位，保留2位
            var micro_sec = this.fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

            return day+"天"+hr + ":" + min + ":" + sec + " " + micro_sec;
        }
    },
}
</script>

<style lang="scss" scoped>
</style>