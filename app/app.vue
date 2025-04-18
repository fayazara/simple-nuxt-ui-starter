<template>
  <NuxtLoadingIndicator color="#000" />
  <NuxtRouteAnnouncer />
  <UApp :toaster="{ position: 'top-center' }">
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        :color-mode="false"
      />
    </ClientOnly>
  </UApp>
</template>

<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo';
const route = useRoute();

const { seo } = useAppConfig();

const { data: navigation } = await useAsyncData(
  'navigation',
  () => queryCollectionNavigation('docs'),
  {
    transform: (data) =>
      data.find((item) => item.path === '/docs')?.children || [],
  }
);

const { data: files } = useLazyAsyncData(
  'search',
  () => queryCollectionSearchSections('docs'),
  {
    server: false,
  }
);

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogImage: seo.image,
  ogUrl: seo.url,
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: seo.image,
  twitterCard: 'summary_large_image',
});

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
    {
      rel: 'canonical',
      href: `https://supersaas.dev${withoutTrailingSlash(route.path)}`,
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});

provide('navigation', navigation);
</script>
