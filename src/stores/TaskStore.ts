import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Task } from '../models/Task';

export const useTaskStore = defineStore('taskStore', () => {
 // estadp inicial
  const loading = ref(false);
  const data = ref<Task[]>([]);
  //agregar una tarea
  const addTask = (task: Task) => data.value.push(task);
 // remueve la tarea
  const removeTask = (taskToRemove: Task) => {
    data.value = data.value.filter(task => task.id !== taskToRemove.id);
  };
   // para actualizar el estado de una tarea
  const updateTaskStatus = (taskToUpdate: Task) => {
    const task = data.value.find(task => task.id === taskToUpdate.id);
    if (task) task.status = !task.status;
  };
  return { loading, data, addTask, removeTask, updateTaskStatus };
});
