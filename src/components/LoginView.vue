<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginWithEmailAndPassword } from "../componsables/useAuth";

import Button from "./shared/Button.vue";
import TextInput from "./shared/TextInput.vue";

const router = useRouter();

const email = ref("secretariaffufrj@gmail.com");
const password = ref("password");
const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  try {
    await loginWithEmailAndPassword(email.value, password.value);
    router.replace({ name: "admin" });
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-full max-w-sm p-6 m-auto mx-auto rounded-md shadow-md">
      <h1 class="text-3xl font-semibold text-center mb-6">FireAuth</h1>

      <p class="text-base-300 font-medium mb-6 text-center">
        Acesso administrativo
      </p>

      <form @submit.prevent="handleSubmit">
        <TextInput
          label="E-mail"
          type="email"
          required
          v-model.trim="email"
          autofocus
          class="mb-4"
        />
        <TextInput
          label="Senha"
          type="password"
          required
          v-model.trim="password"
          class="mb-4"
        />

        <Button
          class="bg-primary text-light w-full"
          type="submit"
          :loading="loading"
        >
          Entrar
        </Button>
      </form>
      <div class="flex justify-end">
        <RouterLink :to="{ name: 'home' }" class="mt-4 text-sm text-gray-400">
          Voltar
        </RouterLink>
      </div>
    </div>
  </div>
</template>
