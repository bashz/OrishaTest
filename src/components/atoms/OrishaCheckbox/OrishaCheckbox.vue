<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label: string
  disabled?: boolean
}

const model = defineModel()
const props = defineProps<Props>()

const classes = computed(() => ({
  'orisha-a-checkbox--active': model.value,
  'orisha-a-checkbox--disabled': props.disabled,
}))
</script>

<template>
  <div class="orisha-a-checkbox" :class="classes">
    <div class="orisha-a-checkbox__box">
      <input type="checkbox" v-model="model" :disabled="disabled" />
      <i class="ph-light ph-check" v-if="model"></i>
      <i class="ph-bold" v-else></i>
    </div>
    <div v-if="label" class="orisha-a-checkbox__label">{{ label }}</div>
  </div>
</template>

<style lang="scss">
@use './variables' as checkbox;
@use '@/assets/scss/variables/corners' as corners;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/mixins/box' as box;

.orisha-a-checkbox {
  @include box.flex;

  &__box {
    width: checkbox.$size;
    height: checkbox.$size;
    border-width: 1px;
    border-style: solid;
    border-color: colors.$stroke-primary;
    border-radius: corners.$steep;
    background-color: colors.$surface;
    opacity: 1;

    input {
      width: checkbox.$size;
      height: checkbox.$size;
      position: absolute;
      margin: 0;
      cursor: pointer;
      opacity: 0;
    }

    i {
      font-size: 16px;
      color: colors.$text-invert;
      padding: 1px;
    }
  }

  &__label {
    margin-left: 4px;
  }
}

.orisha-a-checkbox--active {
  .orisha-a-checkbox__box {
    background-color: colors.$primary;
  }
}

.orisha-a-checkbox--disabled {
  .orisha-a-checkbox__box {
    opacity: 0.4;
  }

  input {
    cursor: initial;
  }
}
</style>
