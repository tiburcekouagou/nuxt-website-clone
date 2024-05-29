<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>

    <template #right>
      <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
        <UContentSearchButton :label="null" />
      </UTooltip>

      <UTooltip
        :text="
          $colorMode.preference === 'dark'
            ? 'Switch to light mode'
            : 'Switch to dark mode'
        "
      >
        <UColorModeButton />
      </UTooltip>

      <UTooltip text="GitHub Stars">
        <UButton
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
        />
      </UTooltip>
    </template>

    <template #panel> </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import type { Link } from "#ui-pro/types";

defineProps<{
  links?: Link[];
}>();

const logo = ref(null);
const navigation = inject<Ref<NavItem>>("navigation");

const stats = useStats();
const { metaSymbol } = useShortcuts();
</script>

<style></style>
