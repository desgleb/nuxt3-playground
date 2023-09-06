<script setup lang="ts">
useHead({
  title: 'My Nuxt3 | Youtube Page'
})

const videos = ref([
  {id: 1, name: 'Video 1'},
  {id: 2, name: 'Video 2'},
  {id: 3, name: 'Video 3'},
  {id: 4, name: 'Video 4'},
])
</script>

<template>
  <div class="youtube">
    <h1>Youtube Page</h1>
    <ul v-if="videos">
      <li v-for="video of videos">
        <NuxtLink :to="'/video/' + video.id">{{ video.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>