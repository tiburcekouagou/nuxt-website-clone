// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/ui", '@vueuse/nuxt'],
  ui: {
    icons: ['heroicons', 'logos', 'octicon', 'ph', 'simple-icons', 'uil']
  }
})
