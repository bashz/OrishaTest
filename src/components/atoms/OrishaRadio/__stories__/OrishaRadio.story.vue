<script lang="ts" setup>
import { reactive, ref } from 'vue'
import OrishaRadio from '../OrishaRadio.vue'

const value = ref('')
const disabled = ref(false)
const state1 = reactive({
  name: 'radio',
  value: 'value1',
})
const state2 = reactive({
  name: 'radio',
  value: 'value2',
})
const state3 = reactive({
  name: 'radio',
  value: 'value3',
})
</script>

<template>
  <Story group="atoms" title="Radio">
    <Variant title="Medium">
      <OrishaRadio :name="state1.name" :value="state1.value" v-model="value" :disabled="disabled" />
      <OrishaRadio :name="state2.name" :value="state2.value" v-model="value" :disabled="disabled" />
      <OrishaRadio :name="state3.name" :value="state3.value" v-model="value" :disabled="disabled" />
    </Variant>
    <Variant title="Small">
      <OrishaRadio
        class="orisha-a-radio--sm"
        :name="state1.name"
        :value="state1.value"
        v-model="value"
        :disabled="disabled"
      />
      <OrishaRadio
        class="orisha-a-radio--sm"
        :name="state2.name"
        :value="state2.value"
        v-model="value"
        :disabled="disabled"
      />
      <OrishaRadio
        class="orisha-a-radio--sm"
        :name="state3.name"
        :value="state3.value"
        v-model="value"
        :disabled="disabled"
      />
    </Variant>
  </Story>
</template>
