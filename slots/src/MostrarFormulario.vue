<template>

  <form class="form">

    <slot name="titulo"></slot>
    <slot name="elementos"></slot>
    <!-- <slot name="boton"></slot> -->
    <!-- los slot por defecto no tienen nombre y busca elementos html que no tenga el
      atributo slot
    -->
    <slot></slot>

  </form>

</template>

<script>

  export default {

  }
</script>

<style scoped>

 /*
  los estilos se colocan donde esta la etiqueta slot
 */
  h3 {
    color: rgba(0,0,0,.85);
  }
</style>
