<script setup lang="ts">
import type { Task } from '@/types/task'

defineProps<{
  tasks: Task[]
}>()

defineEmits<{
  (e: 'toggle', index: number): void
  (e: 'remove', index: number): void
}>()
</script>

<template>
  <v-list dense class="mt-2" theme="light">
    <v-list-item v-for="(task, index) in tasks" :key="index" class="task-item">
      <div class="d-flex align-center justify-space-between w-100">
        <div class="d-flex align-center">
          <v-btn variant="plain" density="default" @click="$emit('toggle', index)" class="mr-2">
            <div 
              class="check-circle d-flex align-center justify-center" 
              :class="{ 'checked': task.done }"
            >
              <v-icon v-if="task.done" color="white" size="24">mdi-check</v-icon>
            </div>
          </v-btn>

          <span @click="$emit('toggle', index)" class="task-text">
            <span :class="{ 'text-decoration-line-through text-grey': task.done }" class="text-black text-body-1">
              {{ task.text }}
            </span>
          </span>
        </div>
        
        <v-btn icon variant="plain" @click="$emit('remove', index)" class="delete-btn">
          <v-icon color="grey-darken-1">mdi-close</v-icon>
        </v-btn>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.task-item {
  padding: 8px 0;
}

.task-text {
  flex: 1;
  margin-right: 16px;
}

.check-circle {
  width: 32px;
  height: 32px;
  border: 2px solid grey;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.checked {
  background-color: #FF5845;
  border-color: #FF5845;
}

.delete-btn {
  opacity: 0.8;
  transition: opacity 0.2s;
}

.delete-btn:hover {
  opacity: 1;
}
</style>

