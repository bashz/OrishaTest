<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Change Me')
</script>

<template>
  <div class="orisha-a-checkbox">
    <h1 class="orisha-a-checkbox__title">{{ title }}</h1>
  </div>
</template>

<style lang="scss">
@use './variables' as checkbox;

.orisha-a-checkbox {
  /* Add component styles here */
  @media (prefers-color-scheme: dark) {
  }

  @media (hover: hover) {
  }

  @media (min-width: 1024px) {
  }
}
</style>
