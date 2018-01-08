
<template>
  <ul class="list-group  tareas">
    <li v-for="(tarea, indice) of tareas"
        v-bind:class="{terminada: tarea.terminada}"
        class="list-group-item  tareas-items">
        {{tarea.texto}}
        <span class="tareas-btn">
            <button @click="tarea.terminada = !tarea.terminada" class="btn  btn-success  btn-sm" type="button">
                <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button @click="borrar(indice)"  class="btn  btn-danger  btn-sm" type="button">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
        </span>
    </li>
  </ul>
</template>

<script>

import { bus } from './main.js';

  export default {
    props: ['tareas'],
    methods: {
      borrar(indice) {
        this.tareas.splice(indice,1);
        bus.actualizarContador(this.tareas.length);
      }
    },
    created() {
      bus.actualizarContador(this.tareas.length);
    }
  }
</script>

<!-- con scoped le decimos que todas esas clases solo seran para ese componente -->
<style scoped>

  /*.btn.primary {
    border-radius: 0 .25rem .25rem 0;
  }*/

  .tareas-items {
    position: relative;
  }
  .tareas-btn {
    position: absolute;
    right: 10px;
  }

  .terminada, .terminada:hover {
    color: gray;
    text-decoration: line-through;
  }
  .terminada, .terminada:hover {
    color: gray;
    text-decoration: line-through;
  }
</style>
