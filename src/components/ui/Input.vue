<script setup>
const model = defineModel()

const props = defineProps({
  id: String,
  label: String,
  type: { type: String, default: 'text' }
})
</script>
<template>
  <div class="mt-4">
    <div class="flex items-center justify-between">
      <label :for="id" class="block text-sm text-gray-800 dark:text-gray-200">
        {{ label }}
      </label>
      <slot name="link" />
    </div>

    <input
      v-model="model"
      v-bind="{ ...$attrs, class: null }"
      :type="type"
      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    />
  </div>
</template>
