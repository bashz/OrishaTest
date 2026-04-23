<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Change Me')
</script>

<template>
  <div class="orisha-m-dropdown">
    <h1 class="orisha-m-dropdown__title">{{ title }}</h1>
  </div>
</template>

<style lang="scss">
@use './variables' as dropdown;

.orisha-m-dropdown {
  /* Add component styles here */
  @media (prefers-color-scheme: dark) {
  }

  @media (hover: hover) {
  }

  @media (min-width: 1024px) {
  }
}
</style>
