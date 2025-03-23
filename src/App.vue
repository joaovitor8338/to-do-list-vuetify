<template>
  <v-app style="background-color: #251460;">
    <v-container class="fill-height d-flex flex-column align-center justify-center">
      <v-card class="pa-6 rounded-xl" color="white" width="700">
        <v-card-title class="text-black text-h5 text-center mb-4 d-flex align-center justify-start">
          To-Do List <v-icon color="orange" class="ml-2">mdi-check-circle-outline</v-icon>
        </v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-text-field v-model="newTask" placeholder="Add your task" dense outlined class="custom-input flex-grow-1"
              color="black" @keyup.enter="addTask" />
            <v-btn class="ml-2 rounded-lg" height="60" color="orange" @click="addTask">ADD</v-btn>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <v-list dense class="mt-2" theme="light">
            <v-list class="mt-2" dense>
              <v-list-item v-for="(task, index) in tasks" :key="index"
                class="d-flex align-center justify-space-between">
                <!-- Botão de check -->
                <v-btn icon @click="toggleTask(index)">
                  <v-icon :color="task.done ? 'orange' : 'grey'">mdi-check-circle</v-icon>
                </v-btn>

                <!-- Texto da tarefa -->
                <v-list-item-content @click="toggleTask(index)" class="flex-grow-1 text-left">
                  <v-list-item-title :class="{ 'text-decoration-line-through text-grey': task.done }"
                    class="text-black">
                    {{ task.text }}
                  </v-list-item-title>
                </v-list-item-content>

                <!-- Botão de excluir -->
                <v-btn icon @click="removeTask(index)">
                  <v-icon color="black">mdi-close</v-icon>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Task {
  text: string;
  done: boolean;
}

export default defineComponent({
  setup() {
    const newTask = ref("");
    const tasks = ref<Task[]>([]);

    const addTask = () => {
      if (newTask.value.trim() !== "") {
        tasks.value.push({ text: newTask.value, done: false });
        newTask.value = "";
      }
    };

    const toggleTask = (index: number) => {
      tasks.value[index].done = !tasks.value[index].done;
    };

    const removeTask = (index: number) => {
      tasks.value.splice(index, 1);
    };

    return { newTask, tasks, addTask, toggleTask, removeTask };
  }
});
</script>

<style>
.custom-input .v-input__control {
  background-color: white;
  border-radius: 12px;
  color: black;
  padding: 0 12px;
}

.custom-item {
  background-color: white;
  border-radius: 12px;
  margin-bottom: 6px;
  padding: 10px;
  cursor: pointer;
}
</style>
