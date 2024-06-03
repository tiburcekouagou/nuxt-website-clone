// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/ui", '@vueuse/nuxt', "@nuxt/content", "@nuxt/image"],
  ui: {
    icons: ['heroicons', 'logos', 'octicon', 'ph', 'simple-icons', 'uil']
  },
  image: {
    ipx: {
      baseURL: 'https://ipx.nuxt.com'
    }
  }
})