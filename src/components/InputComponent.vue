<script setup lang="ts">
// importar themeStore

// importar taskStore
// importar modelo de tarea
import { reactive } from 'vue'
import { useThemeStore } from '../stores/themeStore'
import { useTaskStore } from '../stores/TaskStore';
import type { Task } from '../models/Task';


// iconos
import { XMarkIcon, PlusCircleIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon as SolidCircleIcon } from '@heroicons/vue/24/solid'


// definir variable para almacenar useThemeStore
const theme = useThemeStore();
const taskStore = useTaskStore();
// definir variable reactiva pasando objeto themeStore


// definir variable para almacenar useTaskStore

// definir variable reactiva pasando objeto tasksStore


// una vez importado el modelo Task reemplazar any con el mismo (listo)
const newTask: Task = {
  id:  0,
  tarea:  '',
  status: false
}

const reactiveTask = reactive(newTask)

// funcion para marcar tarea completada
// deberia llamar
function makeItComplete() {
  reactiveTask.status = !reactiveTask.status;
}

// funcion para guardar tarea, debera pasar variable reactiveTask al metodo
// en TaskStore
function saveTask() {
    const newTaskWithId: Task = {
        ...reactiveTask,
        id: taskStore.data.length + 1 
    };
    taskStore.addTask(newTaskWithId);
    reactiveTask.tarea = ''; // deja vacio el campo despues de cargar una "tarea"
    reactiveTask.status = false; // reinicia el estado
}

</script>

<template>
  <div class="wrapper relative group border-black">
    <div class="absolute top-3 sm:top-4 left-5">
      <div class="relative">
        <input
          type="checkbox"
          class="form-checkbox border rounded-full focus:ouline-none h-6 w-6 cursor-pointer transition ease-linear"
          @click="makeItComplete"
          v-model="newTask.status"
        />

        <!-- usar directiva v-if para mostrar si es tarea completa -->
        <!-- agregar directiva @click para llamar al metodo para completar tarea -->
        <SolidCircleIcon v-if="newTask.status" class="h-100 w-100 absolute left-0 top-0 text-green-500"/>
      </div>
    </div>

    <!-- input -->
    <form @submit.prevent>

      <!-- input: usar v-bind para definir si es modo oscuro -->
      <!-- usar v-model para pasar los datos de la nueva tarea -->
      <input

        type="text"
        placeholder="Escribe una nueva tarea"  v-model="newTask.tarea" :class="{ dark: theme.isDark }"
        class="sm:text-base overflow-ellipsis w-full focus:outline-none py-4 sm:py-4.5 pr-8 pl-14 sm:pl-16 cursor-pointer transition ease-linear"
      />

      <!-- div: usar v-bind para definir si es modo oscuro(listo) -->
      <div :class="['btns', { dark: theme.isDark }]" class="btns absolute right-0 top-0 py-2 sm:py-2.5 px-2 w-20 h-14 flex justify-around cursor-default transition ease-linear" >
        <button type="button" @click="saveTask" class="p-1 cursor-pointer">
          <!-- usar @click para usar metodo de guardar tareas(listo) -->
          <PlusCircleIcon class="w-6 h-6 hover:text-green-600"/>
        </button>
        <button type="button" @click="newTask.tarea = ''" class="p-1 cursor-pointer">
          <XMarkIcon class="w-6 h-6 hover:text-red-500 "/>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  input[type="text"] {
    border-radius: 5px;
  }
  .btns {
    background: rgb(190, 190, 190);
    border-radius: 0 5px 5px 0;
  }

  .btns  button:nth-child(1) {
    border-right: 1px solid #434343;
  }

  input.dark {
    background: #434343;
  }

  .btns.dark {
    background: rgb(101, 101, 101);
  }
</style>
