<template>
    <div class="login">
        <h4 class="title">欢迎登录豆瓣</h4>
        <div class="form">
            <div class="login-input">
                <input v-model="name" type="text" placeholder="请输入用户名">
                <i class="icon iconfont icon-cha"></i>
            </div>
            <div class="login-input">
                <input v-model="password" type="password" placeholder="请输入密码">
                <i class="icon iconfont icon-cha"></i>
            </div>
            <div class="login-input">
                <span class="login" @click="login">登录</span>
            </div>
            
            <router-link to="/register">没有账号？立即注册</router-link>
            
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState({
            name: state => state.login.name,
            password: state => state.login.password,
        }),
    },
    methods: {
        ...mapMutations(['login']),
    } 
}
</script>
<style scoped>

.login {
    width: 100%;
    text-align: center;
}
.login .title{
    color: #19be6b;
    font-size: 3rem;
    font-weight: 100;
    padding: 8rem 0 3rem 0;
}
.login-input {
    border: 1px solid #ccc;
    width: 80%;
    height: 5rem;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login-input input{
    border: none;
    outline: none;
    width: 100%;
    height: 4.8rem;
    font-size: 2rem;
    text-indent: 0.8rem;
}
.login-input .icon-cha {
    display: flex;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    background: #b2b2b2;
    color: #fff;
    border-radius: 50%;
    margin: 1rem;
}
.login-input:after {
    border: none;
    text-align: center;
}
.form .login {
    width: 100%;
    height: 5rem;
    display: block;
    background: #19be6b;
    color: #fff;
    line-height: 5rem;
    letter-spacing: 2px;
    font-size: 2rem;
}
</style>
