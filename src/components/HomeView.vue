<script setup>
import Navbar from "./shared/Navbar.vue";
import Button from "./shared/Button.vue";
import Google from "./icons/Google.vue";
import { useRouter } from "vue-router";
import { loginWithGoogle } from "../componsables/useAuth";

const router = useRouter();

const handleLogin = async () => {
  try {
    await loginWithGoogle();
    router.replace({ name: "admin" });
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>
  <div class="h-screen flex flex-col">
    <Navbar />
    <div class="flex-1 container flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold lg:text-4xl text-center max-w-lg">
        Building Your Next App with our Awesome components
      </h1>
      <p class="mt-6 text-gray-500 dark:text-gray-300 mb-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
        similique obcaecati illum mollitia.
      </p>

      <Button class="bg-primary text-light mb-4" @click="handleLogin">
        <Google />
        <span class="ml-4">Sign in with Google</span>
      </Button>

      <RouterLink :to="{ name: 'login' }" class="mt-3 text-sm text-gray-400"
        >Área administrativa</RouterLink
      >
    </div>
  </div>
</template>
