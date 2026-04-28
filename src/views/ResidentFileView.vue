<script setup lang="ts">
import { onMounted } from 'vue'
import { findResidentById } from '@/api'
import router from '@/router'

onMounted(async () => {
  const user = await findResidentById(router.currentRoute.value.params.id)
  console.log(user)
})
</script>

<template>
  <div class="resident-file">
    <h1>Title</h1>
  </div>
</template>
