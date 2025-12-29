<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { getClassList, getDocumentList } from '@/api/document.js'

const request = ref(false)

const classList = ref([])
getClassList().then((res) => {
  classList.value = res.data.data
})
const params = ref({
  pagenum: 1,
  pagesize: 10,
  cate_id: '',
  state: ''
})
const documentList = ref([])
getDocumentList(params.value).then((res) => {
  documentList.value = res.data.data
  request.value = false
})

</script>

<template>
  <mainPage title="文章管理">
    <template #header>
      <el-button type="primary" @click="">添加管理</el-button>
    </template>
    <el-form inline>
      <el-form-item label="文章分类">
        <el-select v-model="params.cate_id" style="width: 180px">
          <el-option
            :label="i.cate_name"
            :value="i.id"
            v-for="i in classList"
            :key="i.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="文章状态">
        <el-select style="width: 180px">
          <el-option></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table style="width: 100%" :data="documentList" v-loading="request">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column label="文章标题">
        <template #default="{ row }">
          <el-link :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="cate_name" label="分类"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column prop="pub_date" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button type="primary" size="small" :icon="Edit" @click=""
            >编辑</el-button
          >
          <el-button type="danger" size="small" :icon="Delete" @click="del(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </mainPage>
</template>
