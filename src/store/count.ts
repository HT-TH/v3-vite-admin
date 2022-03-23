import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export default defineStore('count', () => {
  const state: {count: number} = reactive({
    count: 0
  })

  function handleAdd(): void {
    state.count ++
  }
  
  return { state, handleAdd }
})