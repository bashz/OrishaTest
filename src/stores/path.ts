import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePathStore = defineStore('counter', () => {
  const path = ref([])

  function updatePath(newPath) {
    path.value = newPath
  }

  function appendToPath(part) {
    console.log(part)
    const newPath = [...path.value]
    newPath.push(part)
    updatePath(newPath)
  }

  return { path, updatePath, appendToPath }
})
