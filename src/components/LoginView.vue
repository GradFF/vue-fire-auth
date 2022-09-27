<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginWithEmailAndPassword } from "../firebase/useAuth";
import Button from "./shared/Button.vue";

const router = useRouter();

const email = ref("secretariaffufrj@gmail.com");
const password = ref("@farmacia1937");
const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  try {
    await loginWithEmailAndPassword(email.value, password.value);
    router.replace({ name: "admin" });
  } catch (error) {
    console.log(error.message);
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
        <div class="mb-4">
          <label for="email" class="form__label"> E-mail </label>
          <input
            type="email"
            id="email"
            class="form__control"
            required
            autofocus
            v-model="email"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="form__label"> Senha </label>
          <input
            type="password"
            id="password"
            class="form__control"
            required
            v-model="password"
          />
        </div>

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
