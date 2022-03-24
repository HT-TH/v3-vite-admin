<template>
  <img class="error" src="../assets/images/404.png" alt="">
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute()
  // 通配匹配到的路径
  console.log(route.params.pathMatch);
</script>

<style lang="scss" scoped>
  .error {
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>