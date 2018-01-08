<template>

  <div class="input-group">
    <input v-model="nuevaTarea"
           @keyup.enter="agregarTarea"
           class="form-control"
           placeholder="Escribe una nueva tarea">
    <span class="input-group-btn">
      <button type="button"
              @click="agregarTarea"
              class="btn  btn-primary">
              Agregar
      </button>
    </span>
  </div>

</template>

<script>

  import { bus } from './main.js';

  export default {
    // con props, pasamos informacion del padre al hijo
    props: ['tareas'],
    data() {
      return {
        nuevaTarea: ''
      }
    },
    methods: {
      agregarTarea() {
        var texto = this.nuevaTarea.trim();
        if (texto) {
          this.tareas.push({
            texto: texto,
            terminada: false
          });
          // pasar informacion del hijo al padre
          // this.$emit('',1), emitimos, primer argumento el nombre del evento
          // segundo parametro si queremos pasar un elemento de vuelta

          //this.incrementarContador();
          // emitimos un evento actualizarContador cuando agregemos una tarea
          bus.actualizarContador(this.tareas.length);
        }
        this.nuevaTarea = '';
      }
    },
    created() {
      bus.actualizarContador(this.tareas.length);
    }
  }
</script>
