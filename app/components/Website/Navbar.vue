<template>
  <nav class="border-b border-neutral-100 sticky top-0 z-50 bg-white">
    <UContainer>
      <div class="flex items-center justify-between py-3">
        <div class="flex items-center gap-5">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img src="/logo.svg" alt="Supersaas" class="h-6 w-auto" />
            <span class="text-lg font-bold tracking-tight font-display"
              >Nuxt Starter</span
            >
          </NuxtLink>
          <WebsiteBadge
            title="Catchy Hook"
            url="/blog/supersaas-v3-is-here"
            description="Announce something new here"
          />
        </div>
        <div class="flex items-center gap-2">
          <div class="hidden items-center gap-2 md:flex">
            <UButton
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              :external="link.external"
              variant="ghost"
              color="neutral"
              :target="link.external ? '_blank' : undefined"
              >{{ link.label }}</UButton
            >
          </div>
          <div class="flex items-center gap-2">
            <UButton
              to="/"
              target="_blank"
              external
              variant="solid"
              color="neutral"
              size="lg"
              class="rounded-2xl px-4"
            >
              Login →
            </UButton>
            <UButton
              icon="i-lucide-menu"
              variant="ghost"
              color="neutral"
              class="sm:hidden"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            />
          </div>
        </div>
      </div>
      <transition name="mobile-menu-transition">
        <div v-if="isMobileMenuOpen" class="overflow-hidden md:hidden">
          <div class="flex flex-col gap-2 py-4">
            <UButton
              v-for="(link, index) in links"
              :key="link.label"
              :to="link.to"
              :external="link.external"
              :target="link.external ? '_blank' : undefined"
              class="w-full animate-slide-up"
              :style="{ animationDelay: `${index * 100}ms` }"
              variant="ghost"
              color="neutral"
              @click="isMobileMenuOpen = false"
              >{{ link.label }}</UButton
            >
            <UButton
              variant="ghost"
              color="neutral"
              label="TLDR"
              @click="isTLDRModalOpen = true"
            />
          </div>
        </div>
      </transition>
    </UContainer>
  </nav>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const isTLDRModalOpen = ref(false);
const links = [
  {
    label: 'Pricing',
    to: '/#pricing',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Docs',
    to: '/docs',
  },
];
</script>

<style scoped>
.mobile-menu-transition-enter-active,
.mobile-menu-transition-leave-active {
  transition: all 0.3s ease-out;
}

.mobile-menu-transition-enter-from,
.mobile-menu-transition-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-menu-transition-enter-to,
.mobile-menu-transition-leave-from {
  opacity: 1;
  max-height: 400px;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out forwards;
}
</style>
