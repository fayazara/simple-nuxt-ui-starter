<template>
  <NuxtLink :to="url">
    <Transition name="fade-scale">
      <div
        v-if="showBanner"
        class="group bg-neutral-100 relative hidden items-center gap-2 rounded-full px-3 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-neutral-50 hover:ring-black/[0.13] lg:flex shimmer-container"
      >
        <Icon
          name="i-heroicons-sparkles-solid"
          class="h-4 w-4 text-neutral-800"
        />
        <span class="font-semibold">{{ title }}</span>
        <svg width="2" height="2" aria-hidden="true" class="fill-slate-900">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <span class="font-medium text-neutral-500">
          {{ description }}
        </span>
        <UIcon name="i-lucide-chevron-right" class="h-4 w-4 text-neutral-500" />
      </div>
    </Transition>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: null,
  },
});

const showBanner = computed(() => props.title && props.description);
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

.shimmer-container {
  position: relative;
  overflow: hidden;
}

.shimmer-container::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) rotate(30deg);
  }
  100% {
    transform: translateX(100%) rotate(30deg);
  }
}
</style>
