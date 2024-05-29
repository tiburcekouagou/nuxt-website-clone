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

    <!-- <AppBanner
      id="nuxt-certification-early-bird-launch"
      to="htpps://certification.nuxt.com"
    >
      <div class="flex items-center gap-2">
        <UIcon
          name="i-ph-medal-duotone"
          class="w-5 h-5 flex-shrink-0 pointer-events-none"
        />
        <span
          >The <span class="font-semibold">Nuxt Certification Program</span> by
          VueSchool is out !</span
        >
        <UButton
          color="white"
          trailing-icon="i-ph-arrow-right"
          size="2xs"
          class="rounded-full"
          >Register</UButton
        >
      </div>
    </AppBanner> -->

    <AppHeader :links="headerLinks" />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">

const search = ref(null);
const colorMode = useColorMode();
const { headerLinks, searchLinks } = useNavigation();
const color = computed(() =>
  colorMode.value === "dark" ? "#020420" : "white"
);

useHead({
  titleTemplate: (title) =>
    title ? `${title} . Nuxt` : "Nuxt: The Intuitive Web Framework",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({

  ogSiteName: "Nuxt",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterSite: "nuxt_js",
});
</script>
