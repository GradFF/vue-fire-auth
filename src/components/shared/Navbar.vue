<script setup>
import { ref } from "vue";
import { logoutUser, useAuthState } from "../../firebase/useAuth";
import { useRouter } from "vue-router";
import Button from "./Button.vue";
import Logout from "../icons/Logout.vue";

const { loggedIn } = useAuthState();

const router = useRouter();
const loading = ref(false);

const handleLogout = async () => {
  loading.value = true;
  try {
    await logoutUser();
    router.replace({ name: "home" });
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <header class="">
    <nav class="border-t-4 border-blue-500">
      <div
        class="container flex items-center justify-between px-6 py-3 mx-auto"
      >
        <div>
          <RouterLink
            :to="{ name: 'home' }"
            class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            FireAuth
          </RouterLink>
        </div>
        <div class="flex items-center space-x-2">
          <slot />

          <Button v-if="loggedIn" @click="handleLogout" :loading="loading">
            <Logout class="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  </header>
</template>
