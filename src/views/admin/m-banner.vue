<template>
    <div class="wrapper">
        <el-card>
            <div slot="header">
                <span>轮播管理</span>
            </div>
            <div style="margin-bottom:20px;">
                <el-button type="primary" @click="dialogVisible = true">添加轮播图</el-button>
            </div>
            <div style="margin-top:10px">
                <el-table border :data="tableData">
                    <el-table-column
                        align="center"
                        label="图片"
                        >
                        <template slot-scope="{row}">
                            <img :src="row.slideshowImg" alt="" width="300px">
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="createDate"
                        label="创建日期"
                        :formatter="formatterDate"
                        >
                    </el-table-column>
                    <!-- <el-table-column
                        align="center"
                        prop="slideshowDelect"
                        label="显示状态"
                        >
                    </el-table-column> -->
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
        <el-dialog title="添加轮播图"
        :visible.sync="dialogVisible"
        width="800px">
            <div style="text-align:center">
                <el-upload
                    class="upload-demo"
                    drag
                    :action="uploadURL"
                    ref="upload"
                    :on-success="handleUploadSuccess"
                    multiple>
                    <img :src="imageUrl" alt="" v-if="imageUrl">
                    <div v-else>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import api from '@/api/'
import {ERR_OK,ERR_MSG,uploadURL} from '@/config/'
import {parseTime} from '@/utils'
    export default {
        data() {
            return {
                tableData:[],
                dialogVisible:false,
                uploadURL,
                imageUrl:'',
                resImg:''
            }
        },
        mounted() {
            this._getBanner()
        },
        computed: {
            
        },
        methods: {
            formatterDate(v) {
                return parseTime(v.createDate)
            },
            async _getBanner() {
                try {
                    let {code,data,msg} = await api.back.viewBanner()
                    if(code === ERR_OK) {
                        this.tableData = data
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            },
            handleDelete(row) {
                this.$confirm('此操作将永久删除该图片, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this._delBanner(row.id)
                }).catch(() => {})
            },
            async _delBanner(id) {
                try {
                    let {code,data,msg} = await api.back.delBanner({
                        carouselId:id
                    })
                    if(code === ERR_OK) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this._getBanner()
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            },
            handleUploadSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.resImg = res
                // console.log(res)
                // console.log(file)
            },
            handleSubmit() {
                if(this.resImg) {
                    this._addBanner()
                }else {
                    this.$message.error('您未上传任何图片')
                }
            },
            async _addBanner() {
                try {
                    let {code,data,msg} = await api.back.addBanner({
                        slideshowImg:this.resImg
                    })
                    if(code === ERR_OK) {
                        this.$message({
                            type: 'success',
                            message: '添加成功!'
                        })
                        this.$refs.upload.clearFiles()
                        this._getBanner()
                        this.dialogVisible = false
                    }else {
                        this.$message.error(msg)
                    }
                } catch (error) {
                    this.$message.error(ERR_MSG)
                }
            }
        },
        watch:{
            
        },
        components: {
        }
    }
</script>

<style lang="scss" scoped>

</style>