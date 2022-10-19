<script setup>
import { nanoid } from "nanoid";
import { onMounted, ref } from "vue";
defineProps({
  modelValue: String,
  label: String,
  error: String,
  id: {
    type: String,
    default() {
      return `text-input-${nanoid(4)}`;
    },
  },
  type: {
    type: String,
    default: "text",
  },
});
defineEmits(["update:modelValue"]);
const input = ref(null);
onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});
defineExpose({ focus: () => input.value.focus() });
</script>

<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form__label" :for="id">{{ label }}:</label>
    <input
      :id="id"
      ref="input"
      v-bind="{ ...$attrs, class: null }"
      class="form__control"
      :class="{ error: error }"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="error" class="form__error">{{ error }}</div>
  </div>
</template>
