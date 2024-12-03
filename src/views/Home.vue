<script setup>
import Icon from '../components/ui/Icon.vue'
import Navbar from '../components/ui/Navbar.vue'
</script>
<template>
  <div class="">
    <Navbar />
    <main class="container mt-8">
      <h1>Home page</h1>

      <Icon name="Home" class="size-8" />

      <Icon name="Camera" class="size-16" />

      <div class="mt-4 space-x-4">
        <button class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">secondary</button>
      </div>
    </main>
  </div>
</template>
