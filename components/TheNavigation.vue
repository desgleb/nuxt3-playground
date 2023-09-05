<script setup lang="ts">

</script>

<template>
  <nav class="nav">
    <h3>Nuxt App</h3>
    <ul>
      <li>
        <NuxtLink to="/">Index Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/youtube">Youtube Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About Page</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: darkblue;
  color: white;
}

.nav ul {
  display: flex;
  align-items: center;
  list-style-type: none;
}

.nav li {
  margin-right: 40px;
}

.nav li:first-child {
  margin-left: 40px;
}

.nav a {
  text-decoration: none;
  color: white;
  transition: color .2s ease-in-out;
}

.nav a:hover {
  color: red;
}
</style>