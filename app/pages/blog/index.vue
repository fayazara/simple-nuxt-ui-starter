<template>
  <div>
    <UContainer class="py-24 max-w-2xl">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-4xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl font-display"
        >
          From the press
        </h2>
        <p class="mt-2 text-lg/8 text-neutral-600">
          Guide, tutorials, resources and more from Supersaas
        </p>
      </div>
      <div class="mt-16 space-y-16">
        <article v-for="post in data" :key="post.path">
          <NuxtLink :to="post.path" class="block">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full rounded-2xl"
            />
            <div class="mt-4 flex items-center justify-center gap-x-4 text-xs">
              <time :datetime="post.published" class="text-neutral-500">{{
                post.readableDate
              }}</time>
              <span
                class="relative z-10 rounded-full bg-neutral-50 px-3 py-1.5 font-medium text-neutral-600 hover:bg-neutral-100"
                >{{ post.category }}</span
              >
            </div>
            <div class="mt-2 text-center">
              <h2 class="text-2xl font-semibold text-neutral-900">
                {{ post.title }}
              </h2>
              <p class="mt-2 text-sm text-neutral-600 text-balance">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </article>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData(
  'blog-listing',
  () => {
    return queryCollectionNavigation('blog', [
      'description',
      'published',
      'image',
      'category',
      'readableDate',
      'author',
      'authorImage',
      'timeToRead',
    ]).order('published', 'DESC');
  },
  {
    transform: (rawData) => {
      if (
        rawData &&
        Array.isArray(rawData) &&
        rawData.length > 0 &&
        rawData[0] &&
        Array.isArray(rawData[0].children)
      ) {
        return rawData[0].children;
      }
      return [];
    },
  }
);
</script>
