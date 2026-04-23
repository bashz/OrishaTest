<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Change Me')
</script>

<template>
  <div class="orisha-o-tabs">
    <h1 class="orisha-o-tabs__title">{{ title }}</h1>
  </div>
</template>

<style lang="scss">
@use './variables' as tabs;

.orisha-o-tabs {
  /* Add component styles here */
  @media (prefers-color-scheme: dark) {
  }

  @media (hover: hover) {
  }

  @media (min-width: 1024px) {
  }
}
</style>
