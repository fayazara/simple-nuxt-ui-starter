<template>
  <div class="p-4">
    <footer
      class="bg-neutral-950 rounded-3xl overflow-hidden relative"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-12">
          <div class="relative">
            <div class="flex items-center gap-2 text-white">
              <Logo class="h-6 w-auto" />
              <p class="font-semibold">supersaas.dev</p>
            </div>
            <p class="text-white mt-4">
              The complete fullstack Nuxt 3 starter kit. <br />
              That's it.
            </p>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Features
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.features" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-neutral-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.support" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-neutral-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.resources" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-neutral-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.legal" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-neutral-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navigation = {
  features: [
    { name: 'Authentication', href: '/' },
    { name: 'Database', href: '/' },
    { name: 'Payments', href: '/' },
    { name: 'Teams', href: '/' },
    { name: 'Super Admin', href: '/' },
    { name: 'Examples', href: '/' },
    { name: 'Bundle', href: '/' },
    { name: 'FAQ', href: '/' },
  ],
  support: [
    { name: 'Discord', href: 'https://discord.gg/yqYnveQaeK' },
    { name: 'Email Us', href: 'mailto:fayaz@supersaas.dev' },
    { name: 'Telegram', href: 'https://t.me/fayazara' },
  ],
  resources: [
    { name: 'About', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tools', href: '/' },
    { name: 'Documentation', href: '/docs' },
  ],
  legal: [
    { name: 'License', href: '/' },
    { name: 'Privacy', href: '/' },
    { name: 'Terms', href: '/' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/fayazara',
      icon: 'i-fa6-brands-square-x-twitter',
    },
    {
      name: 'Github',
      href: 'https://github.com/fayazara',
      icon: 'i-mdi-github',
    },
  ],
};
</script>
