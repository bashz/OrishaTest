<script lang="ts" setup>
import { reactive } from 'vue'
import OrishaBreadcrumb from '../OrishaBreadcrumb.vue'

const state = reactive({
  path: ['Home', 'Categories', 'First category', 'Item 3'],
})
</script>

<template>
  <Story group="molecules" title="Breadcrumb">
    <Variant>
      <OrishaBreadcrumb :path="state.path" />
    </Variant>
  </Story>
</template>
