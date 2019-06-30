<template>
    <div>
        <header class="cube-bar">
            <h1>Login</h1>
        </header>
        <section class="cube-content">
            <div class="loginForm">
                <cube-input v-model="loginForm.email" placeholder="E-mail"/>
                <cube-validator ref="email1" v-model="loginForm.result[0]" :model="loginForm.email" :rules="loginForm.emailRule"/>
                <cube-input v-model="loginForm.password" placeholder="password" type="password" style="margin-top: 5px;"/>
                <cube-validator ref="password1" v-model="loginForm.result[1]" :model="loginForm.password" :rules="loginForm.passwordRule"/>
                <cube-button :inline="true" class="loginBtn" @click="login()">Login</cube-button>
            </div>
        </section>
    </div>
</template>

<script>
    import api from '../api/api';
    import {mapActions} from 'vuex'
    export default {
        data () {
            return {
                loginForm:{
                    result:['',''],
                    email: '',
                    emailRule: {type: 'email',required: true,messages:{required: { valid: false, invalid: true, message: "Please input email"}}},
                    password: '',
                    passwordRule: {type: 'password',required: true,messages:"Please input password"},
                },
            }
        },
        methods:{
            login:function () {
                var _this = this;
                const p1 = this.$refs.email1.validate();
                const p2 = this.$refs.password1.validate();
                Promise.all([p1, p2]).then(() => {
                    if (this.loginForm.result.every(item => item)) {
                        let postData = {
                            account:this.loginForm.email,
                            password:this.loginForm.password,
                        }
                        api.post('api/login')(postData).then((data) => {
                            if(data.code == "200"){
                                sessionStorage.setItem("token",data.dto.token);
                                sessionStorage.setItem("account",this.loginForm.account);
                            }else{
                                this.$message({
                                    message: data.msg || '登录失败',
                                    type: 'error'
                                });
                            }
                        })
                    }
                })
                /*this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        let postData = {
                            account:this.loginForm.account,
                            password:this.loginForm.password,
                            media:"mobile"
                        }
                        api.post('api/login')(postData).then((data) => {
                            if(data.code == "200"){
                                sessionStorage.setItem("token",data.dto.token);
                                sessionStorage.setItem("account",this.loginForm.account);
                            }else{
                                this.$message({
                                    message: data.msg || '登录失败',
                                    type: 'error'
                                });
                            }
                        })
                    }else{
                        console.log("录入内容格式错误")
                    }
                })*/
            },
            register:function () {

            },
            ...mapActions([
                'saveUserInfo',
                'setToken'
            ])
        },
        mounted() {
            sessionStorage.removeItem("token");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loginForm{
        text-align: center;
        padding: 20px;
    }
    .loginBtn{
        width: 80px;
        margin-top: 10px;
    }
</style>
