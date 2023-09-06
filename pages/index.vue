<script setup lang="ts">
useHead({
  title: 'My Nuxt3 | Home Page'
})
definePageMeta({
  layout: "default"
})

const { $plugin1 } = useNuxtApp()
</script>

<template>
  <div class="home">
    <h1>Index Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, error hic iure laborum molestiae nulla
      obcaecati optio quas! Accusantium aliquam aliquid asperiores at consequuntur, dicta ea earum optio placeat
      qui?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, error hic iure laborum molestiae nulla
      obcaecati optio quas! Accusantium aliquam aliquid asperiores at consequuntur, dicta ea earum optio placeat
      qui?</p>

    <h2>{{ $plugin1('I am plugin #1') }}</h2>
  </div>
</template>

<style scoped>

</style>