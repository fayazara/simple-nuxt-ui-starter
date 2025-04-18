<template>
  <UContainer>
    <div class="py-20 sm:py-32 text-center max-w-2xl mx-auto">
      <h1 class="font-bold text-4xl sm:text-5xl font-display">
        This is just a placeholder. You need to add a title here.
      </h1>
      <p class="mt-6 text-lg sm:text-xl text-neutral-500">
        This is a description that is longer and more detailed. Give a quick
        overview of what the product is about.
      </p>
      <div class="mt-8 flex justify-center gap-3 items-center">
        <UButton
          label="Get Started"
          trailing-icon="i-lucide-arrow-right"
          :ui="{ trailingIcon: 'size-5' }"
          class="rounded-2xl"
          size="xl"
        />
        <UButton
          label="Book a Demo"
          variant="ghost"
          class="rounded-2xl"
          size="xl"
        />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup></script>

<style></style>
