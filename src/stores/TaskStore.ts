import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Task } from '../models/Task';

export const useTaskStore = defineStore('taskStore', () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> ee4885c8d4e13251ced191c6ee6eb9f886ca83a5
  const updateTaskStatus = (taskToUpdate: Task) => {
    const task = data.value.find(task => task.id === taskToUpdate.id);
    if (task) task.status = !task.status;
  };
<<<<<<< HEAD
=======

>>>>>>> ee4885c8d4e13251ced191c6ee6eb9f886ca83a5
  return { loading, data, addTask, removeTask, updateTaskStatus };
});
