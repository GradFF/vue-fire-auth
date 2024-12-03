<script setup>
import GuestLayout from '../components/layouts/GuestLayout.vue'
import Input from '../components/ui/Input.vue'
import Submit from '../components/ui/Submit.vue'
</script>
<template>
  <GuestLayout>
    <form class="mt-6">
      <Input type="email" id="email" label="E-mail" required />
      <Input type="password" id="password" label="Senha" required>
        <template #link>
          <RouterLink
            :to="{ name: 'recovery' }"
            class="text-xs text-gray-600 dark:text-gray-400 hover:underline"
          >
            Esqueceu a senha?
          </RouterLink>
        </template>
      </Input>

      <div class="mt-6">
        <Submit class="w-full">Acessar</Submit>
      </div>
    </form>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Não tem uma conta?
      <RouterLink
        :to="{ name: 'register' }"
        class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
      >
        Cadastrar
      </RouterLink>
    </p>
  </GuestLayout>
</template>
