<template>
  <UFooter
    :ui="{
      wrapper: 'relative',
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-8 lg:py-12',
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-6',
        left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
        center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
        right:
          'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3',
      },
    }"
  >
    <template #top>
      <UFooterColumns :links="footerLinks">
        <template #right>
          <NewsletterForm />
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright &copy; 2016 - {{ new Date().getFullYear() }} Nuxt -
        <NuxtLink
          class="hover:underline"
          to="https://github.com/nuxt/nuxt/blob/main/LICENSE"
          >MIT License</NuxtLink
        >
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-x"
        color="gray"
        variant="ghost"
        to="https://x.com/nuxt_js"
        target="_blank"
      />
      <UButton
        icon="i-simple-icons-discord"
        color="gray"
        variant="ghost"
        to="https://discord.com/invite/ps2h6QT"
        target="_blank"
      />
      <UButton
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
      />
    </template>
  </UFooter>
</template>

<script lang="ts" setup>
const { footerLinks } = useNavigation();
</script>

<style></style>
