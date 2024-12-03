<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'
import Logo from './Logo.vue'

const isOpen = ref(false)
</script>
<template>
  <nav class="relative bg-white shadow dark:bg-gray-900">
    <div class="container px-6 py-4 mx-auto">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <Logo />

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="btn"
              aria-label="toggle menu"
            >
              <Icon :name="isOpen ? 'X' : 'Menu'" class="size-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          :class="[
            isOpen
              ? 'translate-x-0 opacity-100 '
              : 'opacity-0 -translate-x-full'
          ]"
          class="fixed inset-0 top-16 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
        >
          <div class="flex flex-col -mx-6 md:flex-row md:items-center md:mx-8">
            <RouterLink :to="{ name: 'home' }" class="navbar-link">
              Home
            </RouterLink>
            <RouterLink :to="{ name: 'login' }" class="navbar-link">
              login
            </RouterLink>
          </div>

          <div class="flex items-center mt-4 md:mt-0">
            <button class="btn btn-icon">
              <Icon name="User" class="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
