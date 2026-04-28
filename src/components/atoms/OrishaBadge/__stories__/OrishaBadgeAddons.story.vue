<script lang="ts" setup>
import { reactive } from 'vue'
import { logEvent } from 'histoire/client'
import OrishaBadge from '../OrishaBadge.vue'

const state = reactive({
  label: 'Label',
  prepend: true,
  append: true,
})
</script>

<template>
  <Story group="atoms" title="Badge/Addons" :layout="{ type: 'grid', width: 120 }">
    <Variant title="No addons">
      <OrishaBadge :label="state.label" :prepend="false" :append="false" />
    </Variant>
    <Variant title="Prepend">
      <OrishaBadge :label="state.label" :prepend="state.prepend" :append="false" />
    </Variant>
    <Variant title="Append">
      <OrishaBadge
        :label="state.label"
        :prepend="false"
        :append="state.append"
        @close="logEvent('close', $event)"
      />
    </Variant>
    <Variant title="Both addons">
      <OrishaBadge
        :label="state.label"
        :prepend="state.prepend"
        :append="state.append"
        @close="logEvent('close', $event)"
      />
    </Variant>
  </Story>
</template>
