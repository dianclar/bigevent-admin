<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
const isRegister = ref(true)

const adduserform = ref({
  username: '',
  password: '',
  repassword: ''
})
const repasswordrules = (rule, value, callback) => {
  if (value !== adduserform.value.password) {
    callback(new Error('两次输入密码不一致'))
  } else {
    callback()
  }
}
const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: repasswordrules,
      trigger: 'blur'
    }
  ]
})
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"><div></div></el-col>
    <el-col :span="8" :offset="2" class="col">
      <!-- form->moudel表单数据对象
      form->rules表单规则
      item->v-model表单项数据
      item->prop表单项匹配规则 -->
      <div class="form">
        <el-form
          ref="form"
          size="large"
          autocomplete="off"
          v-show="!isRegister"
          :model="adduserform"
          :rules="rules"
        >
          <el-form-item>
            <h1>注册</h1>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              v-model="adduserform.username"
              :prefix-icon="User"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="adduserform.password"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="repassword">
            <el-input
              v-model="adduserform.repassword"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入再次密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" auto-insert-space>
              注册
            </el-button>
          </el-form-item>
          <el-form-item class="flex">
            <el-link type="info" :underline="false" @click="isRegister = true">
              返回登陆
            </el-link>
          </el-form-item>
        </el-form>
        <el-form ref="form" size="large" autocomplete="off" v-show="isRegister">
          <el-form-item>
            <h1>欢迎登录</h1>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              name="password"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item class="flex">
            <div class="flex">
              <el-checkbox>记住我</el-checkbox>
              <el-link type="primary" :underline="false">忘记密码？</el-link>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" auto-insert-space
              >登录</el-button
            >
          </el-form-item>
          <el-form-item class="flex">
            <el-link type="info" :underline="false" @click="isRegister = false">
              前往注册
            </el-link>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #f0f0f0;
  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    div {
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(240, 240, 240, 0) 50%,
        rgba(240, 240, 240, 0.5) 75%,
        rgba(240, 240, 240, 1) 100%
      );
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .form {
      padding: 0 40px;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }

    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
