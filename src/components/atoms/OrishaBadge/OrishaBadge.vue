<script setup lang="ts">
interface Props {
  label: string
  prepend: boolean
  append: boolean
}

const emit = defineEmits(['close'])

defineProps<Props>()

function closed() {
  emit('close')
}
</script>

<template>
  <div class="orisha-a-badge">
    <slot name="prepend" v-if="prepend">
      <div><i class="ph ph-dot"></i></div>
    </slot>
    <div>
      <span>{{ label }}</span>
    </div>
    <slot name="append" v-if="append">
      <div><i class="ph ph-x" @click="closed"></i></div>
    </slot>
  </div>
</template>

<style lang="scss">
@use './variables' as badge;

.orisha-a-badge {
  /* Add component styles here */
  @media (prefers-color-scheme: dark) {
  }

  @media (hover: hover) {
  }

  @media (min-width: 1024px) {
  }
}
</style>
