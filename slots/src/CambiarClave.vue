<template>
  <div class="container">
    <div class="jumbotron">

      <mostrar-formulario>
        <!-- todo lo que va dentro de esta etiqueta se mostrara gracias
          a la etiqueta slot que esta en mostrarFormulario.vue
        -->
        <div slot="titulo">
          <h3> Cambiar Contraseña </h3>
        </div>

        <div slot="elementos">
          <div class="form-group">
            <label for="correoElectronico">Correo Electronico</label>
            <input id="correoElectronico" class="form-control" type="email" placeholder="Ingrese su Correo Electrónico">
          </div>
        </div>

        <!--
          <div slot="boton">
            <button class="btn  btn-primary">Iniciar Sesión</button>
          </div>
         -->
         <div>
            <button class="btn  btn-primary">Cambiar Contraseña</button>
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
  }
};
</script>

<style>

</style>
