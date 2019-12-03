<template>
    <div class="wrapper">
        <el-card>
            <div slot="header">
                <span>产品管理</span>
            </div>
            <div style="margin-bottom:20px;">
                <el-button type="primary" @click="dialogVisible = true">添加产品</el-button>
            </div>
            <div style="margin-top:10px">
                <el-table :data="tableData" border>
                    <el-table-column prop="productName" align="center" label="名称"></el-table-column>
                    <el-table-column prop="staffName" align="center" label="图片">
                        <template slot-scope="{row}">
                            <img :src="row.productImg" alt width="120" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="stairId" align="center" label="一级分类"></el-table-column>
                    <el-table-column prop="accessId" align="center" label="二级分类"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <!-- <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                            <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                
            </div>
            <div style="text-align:center;margin-top:10px">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="pageSize"
                    :total="total"
                    @current-change="handleCurrentChange">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog title="添加产品" :visible.sync="dialogVisible" width="800px">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="名称" prop="productName">
                    <el-input v-model="form.productName"></el-input>
                </el-form-item>
                <el-form-item label="产品图" prop="productImg">
                    <el-upload
                        ref="upload"
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
                    <el-input v-model="form.productImg" disabled></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="adhibitionRemark">
                    <!-- <el-input v-model="form.adhibitionRemark"></el-input> -->
                    <el-cascader :props="props" @change="changeCascader" v-model="form.adhibitionRemark"></el-cascader>
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
import { ERR_OK, ERR_MSG,uploadURL } from '@/config/'

export default {
    data() {
        return {
            total:0,
            pageNum:1,
            pageSize:10,
            props: {
                lazy: true,
                lazyLoad(node, resolve) {
                    // console.log(node)
                    const { level,value } = node;
                    // 请求一级分类
                    if(level === 0) {
                        api.back.viewStairPduct().then(res => {
                            const data = res.data.map(item => ({
                                value: item.id,
                                label: item.productName,
                                leaf: level >= 1
                            }));
                            resolve(data);
                        })
                    }
                    if(level === 1) {
                        api.back.viewAccsessPduct({
                            StairId: value,
                        }).then(res => {
                            const data = res.data.map(item => ({
                                value: item.id,
                                label: item.accessName,
                                leaf: level >= 1
                            }));
                            resolve(data);
                        })
                    }
                }
            },
            tableData: [],
            dialogVisible: false,
            form: {
                productName: '',
                productImg: '',
                adhibitionRemark: '',
            },
            rules: {
                productName: [
                    { required: true, message: '请输入名称', trigger: 'blur' }
                ],
                productImg: [
                    { required: true, message: '请上传图片', trigger: 'blur' }
                ],
                adhibitionRemark: [
                    { required: true, message: '请选择分类', trigger: 'change' }
                ]
            },
            uploadURL,
            selectCascader:[]
        }
    },
    mounted() {
        this._getProduct()
    },
    computed: {

    },
    methods: {
        handleCurrentChange(page) {
            this.pageNum = page
            this._getProduct()
            console.log(page)
        },
        changeCascader(value) {
            this.selectCascader = value
        },
        async _getProduct() {
            try {
                let { code, data, msg } = await api.back.viewProduct({
                    pageNum:this.pageNum,
                    pageSize:this.pageSize
                })
                if (code === ERR_OK) {
                    this.tableData = data.dataList
                    this.total = data.total
                    console.log(data);
                } else {
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
            }).catch(() => { })
        },
        async _delStaff(id) {
            try {
                let { code, data, msg } = await api.back.delStaff({
                    staffId: id
                })
                if (code === ERR_OK) {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                    this._getStaff()
                } else {
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
            this.form.productImg = res
        },
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if(valid) {
                    this._addProduct()
                }
            })
        },
        // 添加
        async _addProduct() {
            try {
                let { code, data, msg } = await api.back.addProduct({
                    accsessId: this.selectCascader[1],
                    // stairId: this.selectCascader[0],
                    productName: this.form.productName,
                    productImg:this.form.productImg,
                })
                if (code === ERR_OK) {
                    this.$message({
                        type: 'success',
                        message: '添加成功!'
                    })
                    this.dialogVisible = false
                    this._getProduct()
                    this.form = {}
                    this.selectCascader = []
                    this.$refs.upload.clearFiles()
                } else {
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