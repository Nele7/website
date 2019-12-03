<template>
    <div class="wrapper">
        <el-card>
            <div slot="header">
                <span>产品管理</span>
            </div>
            <div style="margin-bottom:20px;">
                <el-button type="primary" @click="handleAddStair">添加一级分类</el-button>
            </div>
            <div style="margin-top:10px">
                <el-table :data="tableData" border>
                    <el-table-column prop="productName" align="center" label="名称"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleAccess(scope.row)">查看二级分类</el-button>
                            <el-button
                                size="mini"
                                type="danger"
                                @click="handleEditStair(scope.row)"
                            >修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <!-- 查看二级分类弹出层 -->
        <el-dialog :title="title" :visible.sync="dialogVisible" width="900px">
            <el-button type="primary" @click="handleAddAccess">新增二级分类</el-button>
            <el-table :data="tableData1" border>
                <el-table-column prop="accessName" align="center" label="名称"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <!-- <el-button
                        size="mini"
                        @click="handleAccess(scope.row)">查看二级分类</el-button>-->
                        <el-button type="danger" @click="handleEditAccess(scope.row)">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>

        <!-- 添加修改一级分类弹出层 -->
        <el-dialog :title="stairDialogTitle" :visible.sync="dialogVisible1" width="800px">
            <el-form ref="form1" :model="form1" label-width="180px" :rules="rules">
                <el-form-item label="一级分类名称" prop="productName">
                    <el-input v-model="form1.productName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="stairType === 'add'?changeAddStair():changeEditStair()"
                    >{{stairType === 'add'?'添加':'修改'}}</el-button>
                    <el-button @click="dialogVisible1 = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 添加修改二级分类弹出层 -->
        <el-dialog :title="accessDialogTitle" :visible.sync="dialogVisible2" width="800px">
            <el-form ref="form2" :model="form2" label-width="180px" :rules="rules2">
                <el-form-item label="二级分类名称" prop="accessName">
                    <el-input v-model="form2.accessName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="accessType === 'add'?changeAddAccess():changeEditAccess()"
                    >{{accessType === 'add'?'添加':'修改'}}</el-button>
                    <el-button @click="dialogVisible2 = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import api from '@/api/'
import { ERR_OK, ERR_MSG } from '@/config/'
const form1 = {
    productName:''
}
const form2 = {
    accessName: '',
    accessId: ''
}
export default {
    data() {
        return {
            tableData: [],
            title: '',
            dialogVisible: false,
            dialogVisible1: false,
            dialogVisible2: false,
            StairId: null,
            tableData1: [],
            form1: Object.assign({}, form1),
            form2: Object.assign({}, form2),
            rules: {
                productName: [{ required: true, message: '请输入名称', trigger: 'blur' }]
            },
            rules2: {
                accessName: [{ required: true, message: '请输入名称', trigger: 'blur' }]
            },
            accessType: '',              // 二级弹窗类型
            accessDialogTitle: '',       // 二级弹窗标题
            stairType: '',               // 一级弹窗类型
            stairDialogTitle: '',        // 一级弹窗标题
        }
    },
    methods: {
        // 获取一级分类
        async _getStairPduct() {
            try {
                let { code, data, msg } = await api.back.viewStairPduct()
                if (code === ERR_OK) {
                    this.tableData = data
                    console.log(data);
                } else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
        // 添加一级分类
        changeAddStair() {
            this.$refs.form1.validate((valid) => {
                if(valid) {
                    this._getAddStair()
                }
            })
        },
        // 修改一级分类
        changeEditStair() {
            this._editStair()
        },
        // 修改一级请求
        async _editStair() {
            try {
                let { code, data, msg } = await api.back.editStairPduct({
                    stairId:  this.form1.id,
                    productName: this.form1.productName
                })
                if (code === ERR_OK) {
                    this.$message({
                        type: 'success',
                        message: '修改一级分类成功'
                    })
                    this.form1 = Object.assign({},form1)
                    this._getStairPduct()
                    this.dialogVisible1 = false
                    // console.log(data);s
                } else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
        // 添加1级
        async _getAddStair() {
            try {
                let { code, data, msg } = await api.back.addStairPduct({
                    ...this.form1
                })
                if (code === ERR_OK) {
                    this.$message({
                        type: 'success',
                        message: '添加一级分类成功'
                    })
                    this.form1 = {}
                    this._getStairPduct()
                    this.dialogVisible1 = false
                    // this.tableData1 = data
                    // console.log(data);
                } else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
        // 打开二级分类弹出层
        handleAccess(row) {
            this.title = row.productName + '二级分类'
            this.StairId = row.id
            this._getAccessPduct()
            this.dialogVisible = true
        },
        // 添加一级分类按钮
        handleAddStair() {
            this.form1 = Object.assign({},form1)
            this.dialogVisible1 = true
            this.stairDialogTitle = '添加一级分类'
            this.stairType = 'add'
        },
        // 修改一级分类按钮
        handleEditStair(row) {
            this.dialogVisible1 = true
            this.stairDialogTitle = '修改一级分类'
            this.stairType = 'edit'
            this.form1 = Object.assign({},row)
        },
        // 获取二级分类
        async _getAccessPduct() {
            try {
                let { code, data, msg } = await api.back.viewAccsessPduct({
                    StairId: this.StairId
                })
                if (code === ERR_OK) {
                    this.tableData1 = data
                    // console.log(data);
                } else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
        // 修改二级分类按钮
        handleEditAccess(row) {
            this.dialogVisible2 = true
            this.accessDialogTitle = '修改二级分类'
            this.accessType = 'edit'
            this.form2 = Object.assign({}, row)
            // console.log(row);
        },
        // 添加二级分类按钮
        handleAddAccess() {
            this.form2 = Object.assign({}, form2)
            this.dialogVisible2 = true
            this.accessDialogTitle = '新增二级分类'
            this.accessType = 'add'
        },
        // 添加二级按钮
        changeAddAccess() {
            this.$refs.form2.validate((valid) => {
                if(valid) {
                    this._addAccess()
                }
            })
        },
        // 添加二级请求
        async _addAccess() {
            try {
                let { code, data, msg } = await api.back.addAccsessPduct({
                    stairId: this.StairId,
                    accessName: this.form2.accessName
                })
                if (code === ERR_OK) {
                    this.$message({
                        type: 'success',
                        message: '添加二级分类成功'
                    })
                    this.form2 = Object.assign({},form2)
                    this._getAccessPduct()
                    this.dialogVisible2 = false
                    // console.log(data);s
                } else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
        // 修改二级按钮
        changeEditAccess() {
            this._editAccess()
        },
        // 修改二级请求
        async _editAccess() {
            try {
                let { code, data, msg } = await api.back.editAccsessPduct({
                    accessId:  this.form2.id,
                    accessName: this.form2.accessName
                })
                if (code === ERR_OK) {
                    this.$message({
                        type: 'success',
                        message: '修改二级分类成功'
                    })
                    this.form2 = Object.assign({},form2)
                    this._getAccessPduct()
                    this.dialogVisible2 = false
                    // console.log(data);s
                } else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        },
    },
    mounted() {
        this._getStairPduct()
    }
}
</script>

<style lang="scss" scoped>
</style>