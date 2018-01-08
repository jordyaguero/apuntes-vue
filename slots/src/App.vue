<template>
  <div class="container">
    <div class="jumbotron">

      <button @click="componenteSeleccionado = 'iniciarSesion' " class="btn  btn-primary">Iniciar Sesión</button>
      <button @click="componenteSeleccionado = 'cambiarClave' " class="btn  btn-primary">Cambiar Contraseña</button>

    <!-- la etiqueta keep-alive sirve para no perder la informacion o que el componente no se  -->

      <keep-alive>
        <component :is="componenteSeleccionado"></component>
      </keep-alive>
    <!-- con v-bind:is="" le decimos cual este seleccionado por defecto -->
    </div>
  </div>
</template>

<script>

import MostrarFormulario from './MostrarFormulario.vue';
import IniciarSesion from './IniciarSesion.vue';
import CambiarClave from './CambiarClave.vue';


export default {
  components: {
    mostrarFormulario: MostrarFormulario,
    iniciarSesion: IniciarSesion,
    cambiarClave: CambiarClave
  },
  data() {
    return {
      componenteSeleccionado: 'iniciarSesion'
    }
  }
};
</script>

<style>

</style>
