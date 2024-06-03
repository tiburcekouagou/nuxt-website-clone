<template>
  <div v-if="page" class="dark:bg-gray-900">
    <ULandingHero class="dark:bg-gradient-to-b from-gray-950 to-gray-900">
      <template #top>
        <HomeHeroBackground
          v-if="!uwuCookie"
          :ui="{ base: 'relative z-1' }"
          class="absolute -top-[--header-height] inset-x-0 w-full hidden lg:block"
          :orientation="uwuCookie ? 'horizontal' : 'vertical'"
        />
      </template>
      <template #headline>
        <UButton v-bind="page.hero.cta" />
      </template>
      <template #title>
        The Intuitive<br /><span class="text-primary block log:inilne-block"
          >Vue Framework</span
        >
      </template>
      <template #description>
        Nuxt is an
        <NuxtLink
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          class="font-medium hover:underline underline-offset-2"
          >open source framework</NuxtLink
        >
        that makes web development intuitive and powerful.<br />Create
        performant and production-grade full-stack web apps and websites with
        confidence.
      </template>
      <template #links>
        <UButton
          to="/docs/getting-started/installation"
          icon="i-ph-rocket-launch-duotone"
          size="xl"
        >
          Get Started
        </UButton>
        <UButton
          size="xl"
          color="white"
          icon="i-ph-video-duotone"
          @click="videoModalOpen = true"
        >
          What is Nuxt ?
        </UButton>

        <UModal v-model="videoModalOpen">
          <div class="p-3">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/dCxSsr5xuL8"
              title="Nuxt in 100 Seconds by Fireship"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </UModal>
      </template>

      <NuxtImg
        v-if="uwuCookie"
        sizes="343px md:455px"
        width="455"
        height="256"
        class="mx-auto lg:my-16"
        src="/uwu.png"
        alt="Nuxt Logo in uwu style"
      />
    </ULandingHero>
  </div>
</template>

<script lang="ts" setup>
const uwuCookie = useCookie<boolean>("uwu-mode", {
  default: () => false,
});

const route = useRoute();
if ("uwu" in route.query) {
  const enableUwu = !["0", "false"].includes(route.query.uwu as string);
  uwuCookie.value = enableUwu;
}

const { data: page } = await useAsyncData("home", () =>
  queryContent("/").findOne()
);

const videoModalOpen = ref<boolean>(false);
</script>

<style></style>
