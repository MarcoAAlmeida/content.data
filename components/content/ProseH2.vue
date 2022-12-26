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