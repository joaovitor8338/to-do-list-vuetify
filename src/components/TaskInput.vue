<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'add'): void
}>()
</script>

<template>
  <v-row no-gutters class="position-relative">
    <v-text-field 
      :model-value="modelValue"
      @update:model-value="value => $emit('update:modelValue', value)"
      placeholder="Adicione sua tarefa" 
      dense 
      outlined 
      class="custom-input flex-grow-1" 
      @keyup.enter="$emit('add')"
      hide-details
    />
    
    <v-btn 
      class="rounded-xl add-btn"
      height="60" 
      width="100" 
      color="#FF5845" 
      @click="$emit('add')"
    >
      ADD
    </v-btn>
  </v-row>
</template>

<style scoped>
.add-btn {
  margin-left: -30px;
}
</style>