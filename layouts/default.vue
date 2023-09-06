<script setup lang="ts">

</script>

<template>
  <div>
    <TheNavigation/>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 50px auto 0;
  padding: 1rem;
  max-width: 960px;
}
</style>