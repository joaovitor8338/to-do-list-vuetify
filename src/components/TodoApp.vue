<script setup lang="ts">
import TaskInput from './TaskInput.vue'
import TaskList from './TaskList.vue'
import { useTasks } from '@/composables/useTasks'

const { newTask, tasks, addTask, toggleTask, removeTask } = useTasks()
</script>

<template>
  <v-app style="background-color: #251460;">
    <v-container class="fill-height d-flex flex-column align-center justify-center">
      <v-card class="pa-6 rounded-xl" color="white" width="700">
        <v-card-title class="text-black text-h5 text-center mb-4 d-flex align-center justify-start">
          To-Do List <v-icon color="#FF5845" class="ml-2">mdi-check-circle-outline</v-icon>
        </v-card-title>
        <v-card-text>
          <TaskInput
            v-model="newTask"
            @add="addTask"
          />
          <v-divider class="my-4"></v-divider>
          <TaskList
            :tasks="tasks"
            @toggle="toggleTask"
            @remove="removeTask"
          />
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>