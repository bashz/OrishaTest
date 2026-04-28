<script lang="ts" setup>
import { reactive } from 'vue'
import OrishaBadge from '../OrishaBadge.vue'

const state = reactive({
  label: 'Label',
  prepend: true,
  append: true,
})

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'turquoise',
  'rose',
  'fuchsia',
  'violet',
  'indigo',
  'blue',
]
</script>

<template>
  <Story group="atoms" title="Badge/Colors-sizes" :layout="{ type: 'grid', width: 120 }">
    <Variant title="Medium">
      <OrishaBadge :label="state.label" :prepend="state.prepend" :append="state.append" />
    </Variant>
    <Variant v-for="color in colors" :key="color" :title="`Medium ${color}`">
      <OrishaBadge
        :class="`orisha-a-badge--${color}`"
        :label="state.label"
        :prepend="state.prepend"
        :append="state.append"
      />
    </Variant>
    <Variant title="Small">
      <OrishaBadge
        class="orisha-a-badge--sm"
        :label="state.label"
        :prepend="state.prepend"
        :append="state.append"
      />
    </Variant>
    <Variant v-for="color in colors" :key="color" :title="`Small ${color}`">
      <OrishaBadge
        :class="`orisha-a-badge--sm orisha-a-badge--${color}`"
        :label="state.label"
        :prepend="state.prepend"
        :append="state.append"
      />
    </Variant>
  </Story>
</template>
