<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  value: unknown
  disabled?: string
}

const model = defineModel()
const props = defineProps<Props>()

const classes = computed(() => ({
  'orisha-a-radio--active': model.value === props.value,
  'orisha-a-radio--disabled': props.disabled,
}))
</script>

<template>
  <div class="orisha-a-radio" :class="classes">
    <div class="orisha-a-radio__box">
      <input type="radio" :name="name" :value="value" v-model="model" :disabled="disabled" />
      <i class="ph-light ph-check" v-if="model === value"></i>
      <i class="ph-bold" v-else></i>
    </div>
  </div>
</template>

<style lang="scss">
@use './variables' as radio;
@use '@/assets/scss/variables/corners' as corners;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/mixins/box' as box;

.orisha-a-radio {
  width: radio.$size;
  height: radio.$size;
  border-width: 1px;
  border-style: solid;
  border-color: colors.$stroke-primary;
  border-radius: corners.$circle;
  background-color: colors.$surface;
  opacity: 1;

  &__box {
    @include box.flex;
    width: radio.$circle-size;
    height: radio.$circle-size;
    border-radius: corners.$circle;
    margin: 1px;
  }

  input {
    width: radio.$size;
    height: radio.$size;
    position: absolute;
    margin: 0;
    cursor: pointer;
    opacity: 0;
  }

  i {
    font-size: 16px;
    color: colors.$text-invert;
    padding: 2px;
  }
}

.orisha-a-radio--sm {
  width: radio.$size-sm;
  height: radio.$size-sm;

  .orisha-a-radio__box {
    width: radio.$circle-size-sm;
    height: radio.$circle-size-sm;
  }

  input {
    width: radio.$size-sm;
    height: radio.$size-sm;
  }

  i {
    font-size: 12px;
  }
}

.orisha-a-radio--active {
  .orisha-a-radio__box {
    background-color: colors.$primary;
  }
}

.orisha-a-radio--disabled {
  opacity: 0.4;

  input {
    cursor: initial;
  }
}
</style>
