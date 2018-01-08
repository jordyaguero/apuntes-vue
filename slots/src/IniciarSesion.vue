<template>
  <div class="container">
    <div class="jumbotron">

      <mostrar-formulario>
        <!-- todo lo que va dentro de esta etiqueta se mostrara gracias
          a la etiqueta slot que esta en mostrarFormulario.vue
        -->
        <div slot="titulo">
          <h3> Iniciar Sesión </h3>
        </div>

        <div slot="elementos">
          <div class="form-group">
            <label for="correoElectronico">Correo Electronico</label>
            <input id="correoElectronico" class="form-control" type="email" placeholder="Ingrese su Correo Electrónico">
          </div>

          <div class="form-group">
            <label for="clave">Contraseña</label>
            <input id="clave" class="form-control" type="password" placeholder="Ingrese su contraseña">
          </div>
        </div>

        <!--
          <div slot="boton">
            <button class="btn  btn-primary">Iniciar Sesión</button>
          </div>
         -->
         <div>
            <button class="btn  btn-primary">Iniciar Sesión</button>
         </div>
      </mostrar-formulario>

    </div>
  </div>
</template>

<script>
import MostrarFormulario from "./MostrarFormulario.vue";

export default {
  components: {
    mostrarFormulario: MostrarFormulario
  },
  destroyed() {
    console.log("El componente fue destruido");
  },
  activated() {
    console.log("El componente fur activado");
  },
  deactivated() {
    console.log("El componente fue desactivado");
  }
};
</script>

<style>

</style>
