<template>
  <NuxtLink
    :to="to"
    class="block relative bg-primary hover:bg-primary/90 transition-[background] backdrop-blur z-50 app-banner"
    external
    target="_blank"
  >
    <UContainer class="py-2">
      <div class="flex items-center justify-between gap-2">
        <div class="lg:flex-1 hidden items-center"></div>
        <div class="text-sm font-medium text-white dark:text-gray-900">
          <slot />
        </div>

        <div class="flex items-center justify-end lg:flex-1">
          <button class="p-1.5 rounded-md inline-flex hover:bg-primary/90">
            <UIcon 
            name="i-heroicons-x-mark-20-solid"
            class="w-5 h-5 text-white dark:text-gray-900"
            @click.prevent="hideBanner"
             />
          </button>
        </div>
      </div>
    </UContainer>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: number | string;
  to: string;
}>();

const id = `hide-banner-${props.id}`

const hideBanner = () => {
  useLocalStorage(id, 'true')
  
  document.querySelector('html')?.classList.add('hide-banner')
}
</script>

<style scoped>
  .hide-banner .app-banner {
    display: none;
  }
</style>
