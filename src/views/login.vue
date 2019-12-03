<template>
    <div class="login-container">
        <div class="login-wrapper">
            <el-form
                class="login_form"
                :model="user"
                :rules="loginRules"
                ref="user"
                label-position="left"
                label-width="0px"
                v-loading="loadingflag"
                element-loading-text="页面跳转中"
            >
                <h3 class="title">安居门窗后台管理系统</h3>
                <el-form-item prop="phone" class="form_item">
                    <el-input
                        type="text"
                        v-model="user.phone"
                        auto-complete="off"
                        placeholder="账号"
                        class="input-number"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password" class="form_item">
                    <el-input
                        type="password"
                        v-model="user.password"
                        auto-complete="off"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
                <el-form-item style="width:100%;">
                    <el-button
                        class="login_button"
                        type="primary"
                        style="width:100%;"
                        @click="handleSubmit"
                    >登录</el-button>
                    <!-- <el-button class="login_button" type="primary" style="width:40%;" @click="toReg">注册</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import api from '@/api/'
    import {ERR_OK,ERR_MSG} from '@/config/'
    import {mutations} from '@/store'
export default {
    data() {
        return {
            logining: false,
            user: {
                phone: "",
                password: ""
            },
            loginRules: {
                phone: [
                    { required: true, message: "账号不能为空", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "密码不能为空", trigger: "blur" }
                ]
            },
            loadingflag: false
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.user.validate(valid => {
                if (valid) {
                    // this.$store.dispatch('userLogin',this.user)
                    this._login()
                } else {
                    // 这个else只是防止什么都没填写
                    return false;
                }
            });
        },
        async _login() {
            try {
                let {code,data,msg} = await api.back.signIn({
                    ...this.user
                })
                if(code === ERR_OK) {
                    // this.tableData = data
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    })
                    mutations.changeUid(data)
                    this.$router.push('/admin')
                    // console.log(data);
                }else {
                    this.$message.error(msg)
                }
            } catch (error) {
                this.$message.error(ERR_MSG)
            }
        }
    }
};
</script>
<style lang="scss">
.login-wrapper {
    .login_form {
        .el-input {
            display: inline-block;
            height: 47px;
            input {
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                border-radius: 0;
                padding: 12px 5px 12px 15px;
                color: #eee;
                height: 47px;
                caret-color: #fff;
            }
        }
        .form_item {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          color: #454545;
      }
    }
}
</style>

<style scoped lang="scss">
.login-container {
    width: 100%;
    min-height: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    .login-wrapper {
        // position: relative;
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
        .title {
            text-align: center;
            font-weight: 700;
            color: #eee;
            font-size: 24px;
            margin: 0 auto 40px;
        }
    }
}
.el-form-item {
    text-align: center;
}
</style>