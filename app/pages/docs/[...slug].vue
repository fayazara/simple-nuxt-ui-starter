<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { kebabCase } from "scule";
import { findPageHeadline } from "#ui-pro/utils/content";

const route = useRoute();
const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

definePageMeta({
  layout: "docs",
});

const { data } = await useAsyncData(
  route.path,
  () =>
    Promise.all([
      queryCollection("docs").path(route.path).first(),
      queryCollectionItemSurroundings("docs", route.path, {
        fields: ["title", "description"],
      }),
    ]),
  {
    transform: ([page, surround]) => ({ page, surround }),
  }
);
if (!data.value || !data.value.page) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const page = computed(() => data.value?.page);
const surround = computed(() => data.value?.surround);
const title = computed(
  () =>
    (page.value?.navigation as { title: string })?.title || page.value?.title
);

const headline = computed(() =>
  findPageHeadline(navigation!.value, page.value)
);
const titleName = "Supersaas";
useSeoMeta({
  titleTemplate: `%s - ${titleName}`,
  title: title.value,
  ogTitle: `${title.value} - ${titleName}`,
  description: page.value?.description,
  ogDescription: page.value?.description,
});

defineOgImageComponent("Docs", {
  headline: headline.value,
  title: title.value,
});

const communityLinks = computed(() => [
  {
    icon: "i-lucide-mail",
    label: "Email me",
    to: `mailto:fayaz@supersaas.dev`,
    target: "_blank",
  },
  {
    icon: "i-lucide-twitter",
    label: "Find me on Twitter",
    to: "https://x.com/fayazara",
    target: "_blank",
  },
  {
    icon: "i-simple-icons-discord",
    label: "Join our Discord",
    to: "https://discord.gg/yqYnveQaeK",
    target: "_blank",
  },
]);
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" :links="page.links" :headline="headline">
      <template #description>
        <MDC
          v-if="page.description"
          :cache-key="`${kebabCase(route.path)}-description`"
          :value="page.description"
          unwrap="p"
        />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" class="z-[2]">
        <template #bottom>
          <USeparator v-if="page.body.toc.links.length" type="dashed" />

          <UPageLinks title="Need help?" :links="communityLinks" />
          <!-- <USeparator type="dashed" />

          <div class="h-40 bg-red-500" /> -->
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
