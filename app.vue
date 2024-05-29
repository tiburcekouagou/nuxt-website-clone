<template>
  <div>
    <NuxtLoadingIndicator />
    <AppBanner
      id="frontend-nation-2024"
      to="https://frontendnation.com?utm_source=nuxt-website"
    >
      <div class="flex items-center gap-2">
        <UIcon
          name="i-ph-microphone-stage-duotone"
          class="w-5 h-5 flex-shrink-0 pointer-events-none"
        />
        <span>Join the Nuxt Team at Frontend Nation 4-7 June.</span>
        <UButton
          label="Sign up for free"
          color="white"
          trailing-icon="i-ph-arrow-right"
          size="2xs"
          class="rounded-full"
        />
      </div>
    </AppBanner>
  </div>
</template>
