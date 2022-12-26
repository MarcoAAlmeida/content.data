export default defineNuxtConfig({
  devServer: {
    port: 4500,
  },
  modules: ['@nuxt/content'],
  content: {
    documentDriven: false
  }

})
