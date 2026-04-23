<script setup lang="ts">
import { onMounted } from 'vue'
import { findResidentsBySectors, getSectors } from '@/api'

onMounted(async () => {
  const users = await findResidentsBySectors(['Les marguerites', 'Les violettes'])
  console.log(users)
  const sectors = await getSectors()
  console.log(sectors)
})
</script>

<template>
  <div class="resident-list">
    <h1>Title</h1>
  </div>
</template>
