<script lang="ts" setup>
import { reactive, ref } from 'vue'
import OrishaCheckbox from '../OrishaCheckbox.vue'

const isChecked = ref(false)
const state = reactive({
  label: 'Label',
  disabled: false,
})
</script>

<template>
  <Story group="atoms" title="Checkbox">
    <Variant title="checkbox">
      <OrishaCheckbox :label="state.label" v-model="isChecked" :disabled="state.disabled" />
    </Variant>
  </Story>
</template>
