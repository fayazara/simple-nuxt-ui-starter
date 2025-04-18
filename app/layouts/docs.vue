<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            color="neutral"
            highlight
            :navigation="navigation"
            :ui="{
              linkTrailingIcon: 'size-4 text-neutral-500',
              linkLeadingIcon: 'size-4',
              listWithChildren: 'ms-3',
            }"
          />
        </UPageAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>

<style scoped>
::v-deep(nav) {
  top: 56px;
}
</style>
