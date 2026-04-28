<script setup lang="ts">
interface Props {
  label: string
  prepend?: boolean
  append?: boolean
}

const emit = defineEmits(['close'])

defineProps<Props>()

function closed() {
  emit('close')
}
</script>

<template>
  <div class="orisha-a-badge">
    <div class="orisha-a-badge__prepend" v-if="prepend">
      <slot name="prepend">
        <div class="orisha-dot"></div>
      </slot>
    </div>
    <div class="orisha-a-badge__label">
      <span>{{ label }}</span>
    </div>
    <div class="orisha-a-badge__append" v-if="append">
      <slot name="append">
        <i class="ph-bold ph-x" @click="closed"></i>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
@use 'sass:map';
@use './variables' as badge;
@use '@/assets/scss/variables/corners' as corners;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/mixins/box' as box;
@use '@/assets/scss/mixins/text' as text;

.orisha-a-badge {
  @include box.flex;
  @include text.body-xs(500);
  border-radius: corners.$full;
  border-style: solid;
  border-width: 1px;
  display: inline-flex;
  padding: badge.$gap;
  border-color: colors.$stroke-primary;
  background-color: colors.$component-bg;

  &__prepend,
  &__append {
    @include box.flex;
  }

  &__prepend {
    height: badge.$addon-size;
    padding-left: badge.$gap;
  }

  &__label {
    margin: 0 badge.$gap;
  }

  &__append {
    width: badge.$addon-size;
    height: badge.$addon-size;
    border-radius: corners.$circle;
    background-color: colors.get('neutral', 'grey', 200);
    cursor: pointer;

    i {
      font-size: 9px;
    }
  }
}

.orisha-a-badge--sm {
  @include text.body-xxs(500);
  padding: 2px 4px;
}

// color bg border addon
$tones:
  'red' 100 200 200,
  'orange' 100 300 200,
  'yellow' 100 400 300,
  'green' 100 300 300,
  'turquoise' 100 200 200,
  'rose' 100 200 200,
  'fuchsia' 100 300 200,
  'violet' 100 200 200,
  'indigo' 100 300 200,
  'blue' 100 300 300;

@each $color, $bg, $broder, $addon in $tones {
  .orisha-a-badge--#{$color} {
    background-color: colors.get('semantic', $color, $bg);
    border-color: colors.get('semantic', $color, $broder);

    .orisha-a-badge__append {
      background-color: colors.get('semantic', $color, $addon);
    }
  }
}
</style>
