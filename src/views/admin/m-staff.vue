<template>
    <div class="wrapper">
        <el-card>
            <div slot="header">
                <span>人员管理</span>
            </div>
            <div style="margin-bottom:20px;">
                <el-button type="primary" @click="dialogVisible = true">添加人员</el-button>
            </div>
            <div style="margin-top:10px">
                <el-table :data="tableData" border>
                    <el-table-column
                        prop="staffName"
                        align="center"
                        label="姓名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="staffName"
                        align="center"
                        label="头像"
                        >
                        <template slot-scope="{row}">
                            <img :src="row.staffImg" alt="" width="120">
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="staffPost"
                        align="center"
                        label="职位"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="staffPhone"
                        align="center"
                        label="手机号"
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
        <el-dialog title="添加人员"
            :visible.sync="dialogVisible"
            width="800px">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="姓名" prop="staffName">
                    <el-input v-model="form.staffName"></el-input>
                </el-form-item>
                <el-form-item label="头像" prop="staffImg">
                    <el-upload
                    class="upload-demo"
                    :action="uploadURL"
                    multiple
                    ref="upload"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :on-success="handleUploadSuccess"
                    >
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <el-input v-model="form.staffImg" disabled></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="staffPhone">
                    <el-input v-model="form.staffPhone"></el-input>
                </el-form-item>
                <el-form-item label="职位" prop="staffPost">
                    <el-input v-model="form.staffPost"></el-input>
                </el-form-item>
                <el-form-item label="评价" prop="staffComment">
                    <el-input v-model="form.staffComment"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即添加</el-button>
                    <el-button @click="dialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import api from '@/api/'
    import {ERR_OK,ERR_MSG,uploadURL} from '@/config/'
    export default {
        data() {
            return {
                tableData:[],
                dialogVisible:false,
                form: {
                    staffName:'',
                    staffImg:'',
                    staffPhone:'',
                    staffComment:'',
                    staffPost:''
                },
                rules:{
                    staffName:[
                        {required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    staffImg:[
                        {required: true, message: '请上传头像', trigger: 'blur' }
                    ],
                    staffPhone:[
                        {required: true, message: '请输入联系方式', trigger: 'blur' }
                    ],
                    staffComment:[
                        {required: true, message: '请输入职位', trigger: 'blur' }
                    ],
                    staffPost:[
                        {required: true, message: '请输入评价', trigger: 'blur' }
                    ]
                },
                uploadURL,
            }
        },
        mounted() {
            this._getStaff()
        },
        computed: {
            
        },
        methods: {
            async _getStaff() {
                try {
                    let {code,data,msg} = await api.back.viewStaff()
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
                    this._delStaff(row.id)
                }).catch(() => {})
            },
            async _delStaff(id) {
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
            },
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if(valid) {
                        this._addStaff()
                    }
                })
            },
            async _addStaff() {
                try {
                    let {code,data,msg} = await api.back.addStaff({
                        ...this.form
                    })
                    if(code === ERR_OK) {
                        this.$message({
                            type: 'success',
                            message: '新增成功!'
                        })
                        this.form = {}
                        this.$refs.upload.clearFiles()
                        this._getStaff()
                        this.dialogVisible = false
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                    
                }
            },
            handleExceed(files, fileList) {
                this.$message.error(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            handleUploadSuccess(res, file) {
                this.form.staffImg = res
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>