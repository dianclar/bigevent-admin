<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores'
import { setUserInfo, getUserInfo } from '@/api/user'

const {
  userInfo: { username, nickname, id, email }
} = useUserStore()

// 表单数据
const formData = reactive({
  username, // 示例默认值，实际可从 props 或 API 获取
  nickname,
  email,
  id
})
// 表单引用
const formRef = ref(null)

// 加载状态
const loading = ref(false)

// 校验规则
const formRules = {
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      min: 2,
      max: 10,
      message: '昵称长度必须为2-10位',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: ['blur', 'change']
    }
  ]
}

// 提交处理
const handleSubmit = async () => {
  await formRef.value.validate()
  loading.value = true
  const res = await setUserInfo(formData)
  ElMessage.success(res.data.message)
  loading.value = false
  getUserInfo().then((res) => {
    useUserStore().setUserInfo(res.data.data)
  })
}
</script>

<template>
  <mainPage title="基本资料"
    ><div class="user-profile-form">
      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        label-width="80px"
        size="default"
      >
        <!-- 第一行：登录名称（禁用） -->
        <el-form-item label="登录名称" prop="username">
          <el-input
            v-model="formData.username"
            disabled
            placeholder="登录名称不可修改"
          />
        </el-form-item>

        <!-- 第二行：用户昵称（必填，2-10位） -->
        <el-form-item label="用户昵称" prop="nickname">
          <el-input
            v-model="formData.nickname"
            placeholder="请输入2-10位昵称"
            clearable
          />
        </el-form-item>

        <!-- 第三行：用户邮箱（必填，邮箱格式） -->
        <el-form-item label="用户邮箱" prop="email">
          <el-input
            v-model="formData.email"
            placeholder="请输入邮箱地址"
            clearable
          />
        </el-form-item>

        <!-- 第四行：提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="handleSubmit" :loading="loading">
            提交修改
          </el-button>
        </el-form-item>
      </el-form>
    </div></mainPage
  >
</template>
