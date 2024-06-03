<template>
  <UPageColumns>
    <div v-for="(testimonial, index) in testimonials" class="break-inside-avoid">
      <ULandingTestimonial v-bind="testimonial" />
    </div>
  </UPageColumns>
</template>

<script lang="ts" setup>
defineProps<{
  testimonials: {
    quote: string
    author: {
      name: string
      description: string
      to: string
      target?: string
      avatar: {
        src: string
        srcset?: string
      }
    }
  }[]
}>()
</script>

<style>

</style>