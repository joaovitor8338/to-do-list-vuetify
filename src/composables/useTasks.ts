import { ref } from 'vue'
import type { Task } from '@/types/task'

export function useTasks() {
  const newTask = ref("")
  const tasks = ref<Task[]>([])

  const addTask = () => {
    if (newTask.value.trim() !== "") {
      tasks.value.push({ text: newTask.value, done: false })
      newTask.value = ""
    }
  }

  const toggleTask = (index: number) => {
    tasks.value[index].done = !tasks.value[index].done
  }

  const removeTask = (index: number) => {
    tasks.value.splice(index, 1)
  }

  return {
    newTask,
    tasks,
    addTask,
    toggleTask,
    removeTask
  }
}