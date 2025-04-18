<template>
  <UContainer>
    <div class="py-20 sm:py-32 text-center max-w-4xl mx-auto">
      <h1 class="font-bold text-4xl sm:text-6xl font-display">
        The quickest way to run an online store.
      </h1>
      <p class="mt-6 text-base sm:text-xl text-neutral-500 text-balance">
        The above is just a placeholder title. You need to add something that catches the attention of the user.
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
