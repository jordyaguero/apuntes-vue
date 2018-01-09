<template>

  <div class="container">
    <div class="jumbotron">
      <!--
        los filtros se colocan despues de la barra inclinada ( | ) y lo que hacen es
        modificar el valor de la izquierda
        - se definen con la palabra filters: {}, y en el nombre del metodo, tiene que ir el parametro
          que va ser modificado y tiene que retornar algo
        - los filtros no cambian el valor original
      -->
      <span> {{mensaje | mayusculas}} </span>
      <p> {{ mensaje | suspensivos | mayusculas }}</p>

      <p> {{temperatura | aFarenheit}} </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'Aprende vue.js facilmente',
      temperatura: 20
    }
  },
  filters: {
    mayusculas(mensaje) {
      return mensaje.toUpperCase();
    },
    aFarenheit(temperatura) {
      return (9/5 * temperatura) + 32 + 'F';
    }
  }
}
</script>

<style>

</style>
