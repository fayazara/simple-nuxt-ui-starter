<template>
  <main class="py-20">
    <UContainer class="max-w-2xl text-center">
      <h2
        class="text-4xl font-semibold text-balance text-neutral-900 sm:text-5xl font-display"
      >
        {{ page.title }}
      </h2>
      <p class="mt-8 text-neutral-600">
        {{ page.description }}
      </p>
    </UContainer>
    <div class="w-full mx-auto px-0 sm:px-6 lg:px-8 max-w-2xl text-center">
      <img
        :src="page.image"
        :alt="page.title"
        class="w-full mt-8 sm:rounded-2xl"
      />
    </div>
    <UContainer class="max-w-2xl">
      <div class="mt-2 flex items-center justify-between gap-x-4 text-xs">
        <time :datetime="page.published" class="text-neutral-500">
          {{ page.readableDate }}
        </time>
        <UBadge
          :label="page.author"
          :avatar="{ src: page.authorImage }"
          color="neutral"
          variant="ghost"
        />
      </div>
      <div class="mt-8">
        <ContentRenderer v-if="page" :value="page" />
      </div>
    </UContainer>
  </main>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
});

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
  ogTitle: () => page.value?.title,
  ogDescription: () => page.value?.description,
  ogImage: () => `https://supersaas.dev${page.value?.image}`,
  ogUrl: () => `https://supersaas.dev${page.value?.path}`,
  twitterImage: () => `https://supersaas.dev${page.value?.image}`,
  twitterTitle: () => page.value?.title,
  twitterDescription: () => page.value?.description,
  twitterCard: () => 'summary_large_image',
  author: 'Fayaz Ahmed',
});
</script>
