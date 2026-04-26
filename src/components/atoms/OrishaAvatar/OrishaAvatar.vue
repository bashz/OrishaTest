<script setup lang="ts">
import avatarPlaceholder from '@/assets/images/avatar_placeholder.png'

interface Props {
  image?: string
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div class="orisha-a-avatar">
    <img v-if="image" class="orisha-a-avatar__image" :src="image" :alt="title" />
    <img v-else class="orisha-a-avatar__placeholder" :src="avatarPlaceholder" :alt="title" />
  </div>
</template>

<style lang="scss">
@use './variables' as avatar;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/variables/corners' as corners;
@use '@/assets/scss/mixins/box' as box;

.orisha-a-avatar {
  @include box.flex;
  width: avatar.$size-default;
  height: avatar.$size-default;
  border-radius: 50%;
  background-color: colors.$neutral-grey-200;

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &__placeholder {
    width: avatar.$placeholder-default;
    height: avatar.$placeholder-default;
  }

  &--headband {
    width: avatar.$headband;
    height: avatar.$headband;
    border-radius: corners.$default;

    .orisha-a-avatar__image {
      border-radius: corners.$default;
    }
  }

  img {
    object-fit: contain;
  }

  &--xs {
    width: avatar.$size-xs;
    height: avatar.$size-xs;

    .orisha-a-avatar__placeholder {
      width: avatar.$placeholder-xs;
      height: avatar.$placeholder-xs;
    }
  }

  &--sm {
    width: avatar.$size-sm;
    height: avatar.$size-sm;

    .orisha-a-avatar__placeholder {
      width: avatar.$placeholder-sm;
      height: avatar.$placeholder-sm;
    }
  }

  &--md {
    width: avatar.$size-md;
    height: avatar.$size-md;

    .orisha-a-avatar__placeholder {
      width: avatar.$placeholder-md;
      height: avatar.$placeholder-md;
    }
  }

  &--lg {
    width: avatar.$size-lg;
    height: avatar.$size-lg;

    .orisha-a-avatar__placeholder {
      width: avatar.$placeholder-lg;
      height: avatar.$placeholder-lg;
    }
  }

  &--xl {
    width: avatar.$size-xl;
    height: avatar.$size-xl;

    .orisha-a-avatar__placeholder {
      width: avatar.$placeholder-xl;
      height: avatar.$placeholder-xl;
    }
  }

  &--xxl {
    width: avatar.$size-xxl;
    height: avatar.$size-xxl;

    .orisha-a-avatar__placeholder {
      width: avatar.$placeholder-xxl;
      height: avatar.$placeholder-xxl;
    }
  }
}
</style>
