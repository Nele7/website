<template>
    <div class="wrapper">
        <el-card>
            <div slot="header">
                <span>案例管理</span>
            </div>
            <div style="margin-bottom:20px;">
                <el-button type="primary" @click="dialogVisible = true">添加案例</el-button>
            </div>
            <div style="margin-top:10px">
                <el-table :data="tableData" border>
                    <el-table-column
                        prop="adhibitionHeadline"
                        align="center"
                        label="名称"
                        >
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="案例图"
                        >
                        <template slot-scope="{row}">
                            <img :src="row.adhibitionImg" alt="" width="120">
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="adhibitionRemark"
                        align="center"
                        label="描述"
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
        <el-dialog title="添加案例"
        :visible.sync="dialogVisible"
        width="800px">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="名称" prop="adhibitionHeadline">
                    <el-input v-model="form.adhibitionHeadline"></el-input>
                </el-form-item>
                <el-form-item label="案例图" prop="adhibitionImg">
                    <el-upload
                        class="upload-demo"
                        :action="uploadURL"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"
                        :on-success="handleUploadSuccess"
                        >
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <el-input v-model="form.adhibitionImg" disabled></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="adhibitionRemark">
                    <el-input v-model="form.adhibitionRemark"></el-input>
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
                    adhibitionHeadline:'',
                    adhibitionImg:'',
                    adhibitionRemark:''
                },
                rules:{
                    adhibitionHeadline:[
                        {required: true, message: '请输入名称', trigger: 'blur' }
                    ],
                    adhibitionImg:[
                        {required: true, message: '请上传图片', trigger: 'blur' }
                    ],
                    adhibitionRemark: [
                        {required: true, message: '请输入描述', trigger: 'blur' }
                    ]
                },
                uploadURL
            }
        },
        mounted() {
            this._getCase()
        },
        computed: {
            
        },
        methods: {
            async _getCase() {
                try {
                    let {code,data,msg} = await api.back.viewCase()
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
                this.$confirm('此操作将永久删除该案例, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this._delBanner(row.id)
                }).catch(() => {})
            },
            async _delBanner(id) {
                try {
                    let {code,data,msg} = await api.back.delCase({
                        caseId:id
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
                        this._addCase()
                    }
                })
            },
            async _addCase() {
                try {
                    let {code,data,msg} = await api.back.addCase({
                        ...this.form
                    })
                    if(code === ERR_OK) {
                        this.$message({
                            type: 'success',
                            message: '添加成功!'
                        })
                        this._getCase()
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
                this.form.adhibitionImg = res
            },
        },

    }
</script>

<style lang="scss" scoped>

</style>