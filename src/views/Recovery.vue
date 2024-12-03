<script setup>
import GuestLayout from '../components/layouts/GuestLayout.vue'
import Input from '../components/ui/Input.vue'
import Submit from '../components/ui/Submit.vue'
</script>
<template>
  <GuestLayout>
    <p class="mt-6 font-light text-gray-500 dark:text-gray-400">
      Inoforme seu e-mail e enviaremos um link para redefinir sua senha!
    </p>
    <form class="mt-6">
      <Input type="email" id="email" label="E-mail" required />

      <div class="mt-6">
        <Submit class="w-full">Redefinir Senha</Submit>
      </div>
    </form>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      <RouterLink
        :to="{ name: 'login' }"
        class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
      >
        Voltar
      </RouterLink>
    </p>
  </GuestLayout>
</template>
