<script setup>
import Logo from '../ui/Logo.vue'
</script>
<template>
  <div class="py-16">
    <div class="w-full max-w-sm p-6 m-auto mx-auto rounded-lg shadow-md">
      <div class="flex justify-center mx-auto">
        <Logo />
      </div>

      <div class="mt-6">
        <slot />
      </div>
    </div>
  </div>
</template>
