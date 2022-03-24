<template>
  <el-container class="basis_layout">
    <el-header class="header">
      <svg-icon class="icon" name="shiba"></svg-icon>
      <div class="header_right"></div>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu
          default-active="2"
          class="menu"
          unique-opened
        > 
          <template v-for="menu_item in menu" :key="menu_item.href">
            <template v-if="menu_item.children">
              <el-sub-menu>
                <template #title>
                  <span>{{menu_item.title}}</span>
                </template>
                <el-menu-item @click="handleClick(menu_item)" v-for="i in menu_item.children" :index="i.href" :key="i.href">
                  <span>{{i.title}}</span>
                </el-menu-item>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="menu_item.href" @click="handleClick(menu_item)">
                <span>{{menu_item.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item v-for="item in breadcrumb" :key="item.title" :to="{ path: item.href }">{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="view">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { ArrowRight } from '@element-plus/icons-vue'
  import { ComputedRef, ref } from "vue"
  import { useRoute, useRouter } from "vue-router"

  const router = useRouter()
  const route = useRoute()

  const breadcrumb = ref<Menu[]>([])
  interface Menu {
    title: string,
    href: string,
    level: number,
    children?: Array<Menu>
  }
  const menu: Array<Menu> = [
    {
      title: '首页',
      href: '/home',
      level: 1
    },
    {
      title: '关于',
      href: '/about',
      level: 1
    }
  ]
  function handleClick(item: Menu):void {
    // router.push({path: item.index})
    let tmp = breadcrumb.value.filter(i => i.level < item.level)
    tmp.push(item)
    breadcrumb.value = tmp
    router.push(item.href)
  }

  let index = 0
  route.fullPath.split('/').slice(1).map(item => {
    if(index === 0) {
      index = menu.findIndex(i => i.href === '/' + item)
      breadcrumb.value.push(menu[index])
    } else {
      let curr: Array<Menu> = (menu[index].children as Menu[])
      index = curr.findIndex(i => i.href === '/' + item)
      breadcrumb.value.push(curr[index])
    }
  })
  console.log(route.fullPath)
  console.log();
</script>

<style lang="scss">
  .basis_layout {
    width: 100vw;
    height: 100vh;
    .header {
      background: $theme-color;
      display: flex;
      justify-content: space-between;
      .icon {
        width: 60px;
        height: 60px;
      }
    }
    .aside {
      width: 200px;
      height: calc(100vh - 60px);
      .menu {
        height: 100%;
      }
    }
    .main {
      height: calc(100vh - 60px);
      background: rgb(245, 246, 251);
      padding: 0 20px;
      .el-breadcrumb {
        height: 40px;
        line-height: 40px;
      }
      .view {
        background: #FFFFFF;
        border-radius: $border-radius;
        width: 100%;
        height: calc(100% - 50px);
        overflow: auto;
        padding: 20px;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          width: 10px;
        }
        &::-webkit-scrollbar-thumb{
          background-color: #0003;
          border-radius:10px;
          transition: all .2s ease-in-out;
        }
      }
    }
  }
</style>