<script setup>
import GuestLayout from '../components/layouts/GuestLayout.vue'
import Input from '../components/ui/Input.vue'
import Submit from '../components/ui/Submit.vue'
</script>
<template>
  <GuestLayout>
    <form class="mt-6">
      <div class="grid grid-cols-2 gap-4">
        <Input type="text" id="firstName" label="Nome" required />
        <Input type="text" id="lastName" label="Sobrenome" required />
      </div>
      <Input type="email" id="email" label="E-mail" required />
      <Input type="password" id="password" label="Senha" required />

      <div class="mt-6">
        <Submit class="w-full">Cadastrar</Submit>
      </div>
    </form>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Já tem uma conta?
      <RouterLink
        :to="{ name: 'login' }"
        class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
      >
        Acessar
      </RouterLink>
    </p>
  </GuestLayout>
</template>
