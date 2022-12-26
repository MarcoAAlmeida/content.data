---
navigation.title: 'Home'
---

# Nuxt Content

This page corresponds to the `/` route of your website. You can delete it or create another file in the `content/` directory.

Try to navigate to [/about](/about). These 2 pages are rendered by the `pages/[...slug].vue` component.

# Markdown

check the markdown configurations 

```js[nuxt.config.ts]
export default defineNuxtConfig({
...
  modules: ['@nuxt/content'],
  content: {
    documentDriven: false,
    markdown:{
      anchorLinks:{
        depth: 1
      }
    }
  }
...
})
```

## override H2 prose component

An example of how to overide HTML component (added a rather ugly background to h2)

```js[components/content/ProseH2.vue]
<template>
    <h2 :id="id" class="red">
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

<style scoped>
  .red {
      background-color:rgb(242, 136, 136);
  }
</style>
```

# static data rendering

Navigate to [/static/frameworks](/static/frameworks), which is a JSON rendered from a CSV file. 

# data browser

[/browser](/browser) lets you filter through the $content model.


# class attributes via markdown

```
![nuxt content](/img/content.nuxtjs.org.png){.thumbnail},
```

And this thumbnail image is served via /public static content, and styled directly in mardown  
![nuxt content](/img/content.nuxtjs.org.png){.thumbnail},

# MDC usage

## basic component

::card
basic example of MDC syntax (background is a scoped style of the component)
::


---

Look at the [Content documentation](https://content.nuxtjs.org/) to learn more.
