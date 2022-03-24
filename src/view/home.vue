<template>
  <section class="container">
    <el-space direction="vertical" :size="10">
      <img src="../assets/images/shiba.jpg" class="photo" alt="">
      <span>名称：柴犬</span>
      <span>日文名：柴犬（读音：Shibainu）</span>
      <span>点赞数：{{state.count}}</span>
      <el-button @click="handleClick" type="primary" round>
        <svg-icon name="great" :width="28" :height="28"></svg-icon>
        点赞
      </el-button>
    </el-space>
  </section>
</template>

<script setup lang="ts">
  import { Plus } from '@element-plus/icons-vue'
  import { storeToRefs } from 'pinia'
  import useCount from '../store/count'
  const counter = useCount()
  const { state } = storeToRefs(counter)

  function handleClick() {
    counter.handleAdd()
  }
</script>

<style lang="scss" scoped>
.container {
  @include centered-flex;
  flex-direction: column;
  text-align: center;
  .photo {
    width: 200px;
  }
  svg { 
    margin-right: 10px;
  }
}
</style>
