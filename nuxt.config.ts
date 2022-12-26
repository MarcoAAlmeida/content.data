export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    documentDriven: false,
    markdown:{
      anchorLinks:{
        depth: 1
      }
    }
  }

})
