# Vue 3 + Typescript 自用后台框架

封装了 `svg`、`pinia`、`router`、`element-plus` 等功能

## `svg-icon`
  | 使用
  - 将准备好的 `svg` 文件保存到 `/src/assets/icons` 中
  - 在使用到的地方
    `<svg-icon name="shiba" width="28" height="28"></svg-icon>`
    + `name`：与文件名相同即可 string类型
    + `width`: 图标宽度 number类型
    + `height`: 图标高度 number类型
    + `color`: 图标颜色（可能会失效）string类型

## `pinia`
 | [中文文档](https://baimingxuan.net/pinia-doc-cn/)

## `vue-router`
 | [官方文档 v4.x](https://router.vuejs.org/zh/api/)

## `element-plus`
 | [官方文档](https://element-plus.gitee.io/zh-CN/component/button.html)

### 布局
  - 基础布局`basisTemplate` 路径`src/layout/BasisTemplate.vue`
  - 404页面`errorTemplate` 路径`src/layout/ErrorTemplate.vue`

### 样式
  - 使用 `normalize.css` 初始化页面样式 
  - 全局自动导入样式 `/src/assets/styles/base.scss` 使用样式变量
