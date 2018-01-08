<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!--<titulo :titulo="titulo"></titulo> -->
      <titulo :titulo="titulo"></titulo>
      <!-- el valor de $event es el que estamos pasando del segundo parametro de emit() -->
      <!-- <nueva-tarea :tareas="tareas" :incrementarContador="incrementarContador"></nueva-tarea> -->
      <nueva-tarea :tareas="tareas"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>

//  ./ quiere decir que viene de la misma carpeta del archivo que estamos utilizando
import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import ListaTareas from './ListaTareasComponent.vue'

export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data() {
    return {
      titulo: 'Lista de Tareas',
      numeroTareas: 3,
      tareas: [
        {
          texto: 'Aprender vue',
          terminada: false
        },
        {
          texto: 'Aprender css grid',
          terminada: false
        },
        {
          texto: 'Aprender react',
          terminada: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
