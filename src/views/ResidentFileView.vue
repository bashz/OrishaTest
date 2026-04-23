<script setup lang="ts">
import { onMounted } from 'vue'
import { findUsersById } from '@/api'
import router from '@/router'

onMounted(async () => {
  const user = await findUsersById(router.currentRoute.value.params.id)
  console.log(user)
})
</script>

<template>
  <div class="resident-file">
    <h1>Title</h1>
  </div>
</template>
