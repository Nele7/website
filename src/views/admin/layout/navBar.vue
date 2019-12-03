<template>
    <el-row class="navBar-wrapper">
        <el-col :span="19" style='font-size:18px' class="logo">
            <span style="color:#20a0ff">安居门窗后台管理</span>
        </el-col>
        <el-col :span='5' class='rightbar'>
            <el-button type="text" @click="con">注销</el-button>
        </el-col>
    </el-row>
</template>

<script>
  import api from '@/api/'
    import {ERR_OK,ERR_MSG} from '@/config/'

    import {mutations} from '@/store'

    export default {
        data() {
            return {
            }
        },
        methods: {
            con() {
                this._loginOut()
            },
            async _loginOut() {
                try {
                    let {code,data,msg} = await api.back.signOut()
                    if(code === ERR_OK) {
                        // this.tableData = data
                        this.$message({
                            type: 'success',
                            message: '注销成功'
                        })
                        mutations.cancelUid()
                        this.$router.push('/login')
                        // console.log(data);
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {s
                    this.$message.error(ERR_MSG)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.navBar-wrapper {
    > div {
        height: 60px;
        line-height: 60px;
    }
}
</style>