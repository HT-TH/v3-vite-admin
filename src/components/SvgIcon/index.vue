<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>