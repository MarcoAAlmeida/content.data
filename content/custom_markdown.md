---
navigation.title: 'Customizing Markdown'
slug: 'custom_markdown'
---
# Customizing Markdown

This section explores some [markdown configurations](https://content.nuxtjs.org/api/configuration/#markdown), it shows how to:

- override a Prose component
- configure Code Snippets


## override H2 prose component

An example of how to overide HTML component (styled with TailwindCSS)

```js[components/content/ProseH2.vue]
<template>
  <h2 :id="id" class="p-6 text-3xl text-cyan-900 bg-white">
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
  
<script setup lang="ts">
  import { useRuntimeConfig } from '#imports'
  defineProps<{ id: string }>()
  const heading = 2
  const { anchorLinks } = useRuntimeConfig().public.content
  const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
```

- :icon{name="logos:github" size="3em"}  [nuxt-content Prose components](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose)
- :icon{name="logos:github" size="3em"} [nuxt-content components](https://github.com/nuxt/content/tree/main/src/runtime/components) in general.

## Code Snippets

Code Snippets use [Shiki themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md), which can be configured in **nuxt.config.js**

```js{20-25}[nuxt.config.js]
export default defineNuxtConfig({
  extends: [
    process.env.TYPOGRAPHY_THEME || '@nuxt-themes/typography',
    '@nuxt-themes/elements'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-config-schema',
    '@nuxthq/studio'
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-light',
        sepia: 'monokai'
      }
    },
    documentDriven: false,
    markdown:{
      anchorLinks:{
        depth: 2
      }
    }
  },
})

```

this snippet (take note of the highlight for individual line, and line ranges)

```
```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

yields...

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

### markdown configurations

check the markdown configurations for [anchor links used](https://content.nuxtjs.org/api/configuration#anchorlinks) in headers

In the example, headers up to level 2 are rendered with anchor tags (excluding h1, basically only h2)

```js[nuxt.config.ts]
export default defineNuxtConfig({
...
  modules: ['@nuxt/content'],
  content: {
    documentDriven: false,
    markdown:{
      anchorLinks:{
        depth: 2
      }
    }
  }
...
})
```




# class attributes via markdown

```
![nuxt content](/img/content.nuxtjs.org.png){.thumbnail},
```

And this thumbnail image is served via /public static content, and styled directly in mardown  
![nuxt content](/img/content.nuxtjs.org.png){.thumbnail},
