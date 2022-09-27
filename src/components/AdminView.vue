<script setup>
import { useAuthState } from "../firebase/useAuth";
import Navbar from "./shared/Navbar.vue";

const { user } = useAuthState();
</script>
<template>
  <div>
    <Navbar />
    <div class="container py-8">
      <h1 class="text-3xl font-bold underline">Admin Page</h1>
      <h2 v-if="user" class="text-lg">
        Welcome: {{ user.displayName || user.email }}
      </h2>
    </div>
  </div>
</template>
