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
                <el-menu-item @click="handleClick" v-for="i in menu_item.children" :index="i.href" :key="i.href">
                  <span>{{i.title}}</span>
                </el-menu-item>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="menu_item.href" @click="handleClick">
                <span>{{menu_item.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { ComputedRef, defineProps } from "vue";
  interface Menu {
    title: String,
    href: String,
    children?: Array<Menu>
  }
  const menu: Array<Menu> = [
    {
      title: 'Navigator One',
      href: 'Navigator One',
      children: [
        {
          title: 'item one',
          href: 'item one'
        },
        {
          title: 'item two',
          href: 'item two'
        },
        {
          title: 'item three',
          href: 'item three'
        }
      ]
    },
    {
      title: 'Navigator Two',
      href: 'Navigator Two'
    },
    {
      title: 'Navigator Three',
      href: 'Navigator Three'
    },
    {
      title: 'Navigator Four',
      href: 'Navigator Four'
    }
  ]

  interface ClickItem{
    active: ComputedRef,
    index: String,
    indexPath: ComputedRef
  }
  function handleClick(item: ClickItem):void {
    console.log(item);
  }
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
      overflow: auto;
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
</style>