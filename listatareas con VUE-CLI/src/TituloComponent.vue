
<template>
<!-- solo podemos tener un elemento raiz en template
<h2> {{titulo}} </h2>
<h3>Tareas por hacer</h3>
asi daria un error
-->

  <div>
    <h2> {{tituloMayusculas()}} </h2>
    <h3>Tareas por hacer: {{numeroTareas}}</h3>
  </div>
</template>

<script>
// en props cuando utilizamos {} estamos validando propiedades
// default es el valor por defecto

import { bus } from './main.js';

  export default {
    props: ['titulo'],
    data() {
      return {
        numeroTareas: 0
      }
    },
    methods: {
      tituloMayusculas() {
        return this.titulo.toUpperCase();
      }
    },
    created() {
      // el $on recibe el nombredel evento y como 2do parametro una funcion
      bus.$on('actualizarContador', numTareas => this.numeroTareas = numTareas);
      //bus.$on('eliminarTarea', numTareas => this.numeroTareas = numTareas);
    }
  }
</script>
