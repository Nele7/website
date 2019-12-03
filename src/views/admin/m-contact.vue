<template>
    <div class="wrapper">
        <el-card>
            <div slot="header">
                <span>联系我们</span>
            </div>
            <!-- <div style="margin-bottom:20px;">
                <el-button type="primary" @click="dialogVisible = true">添加产品</el-button>
            </div> -->
            <div style="margin-top:10px">
                <el-table :data="tableData" border>
                    <el-table-column
                        prop="userName"
                        align="center"
                        label="用户名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="userPhone"
                        align="center"
                        label="联系方式"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="remark"
                        align="center"
                        label="备注"
                        >
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <!-- <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                            <el-button
                            type="danger"
                            @click="handleDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
    import api from '@/api/'
    import {ERR_OK,ERR_MSG} from '@/config/'
    export default {
        data() {
            return {
                tableData:[]
            }
        },
        mounted() {
            this._getAbout()
        },
        computed: {
            
        },
        methods: {
            async _getAbout() {
                try {
                    let {code,data,msg} = await api.back.viewAbout()
                    if(code === ERR_OK) {
                        this.tableData = data.dataList
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            },
            handleDelete(row) {
                this.$confirm('此操作将永久删除该人员, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this._delBanner(row.id)
                }).catch(() => {})
            },
            async _delBanner(id) {
                try {
                    let {code,data,msg} = await api.back.delStaff({
                        staffId:id
                    })
                    if(code === ERR_OK) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this._getStaff()
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>