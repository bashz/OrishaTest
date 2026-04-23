<script setup lang="ts">
import { onMounted } from 'vue'
import { findUsersById } from '@/api'

onMounted(async () => {
  const user5 = await findUsersById('5')
  console.log(user5)
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
