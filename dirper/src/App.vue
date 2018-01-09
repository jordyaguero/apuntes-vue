<template>

  <div class="container">
    <div class="jumbotron">
      <!-- de esta manera pasamos un valor ala directiva -->
      <!-- v-decorar:grande, con los 2 puntos le estamos diciendo ala directiva que esta pasando un argumento -->
      <!-- <span v-decorar:pequeno.negrilla.italico="'helvetica'">Aprender vue.js facilmente</span> -->
      <!-- pasar objetos ala directiva: -->
      <span v-decorar:pequeno.negrilla.italico="{familia: 'Arial', color: 'peru'}">Aprender vue.js facilmente</span>
      <hr>
      <span v-decorar-local:grande.negrilla="{familia: 'times new roman', color: 'steelblue'}">Aprender react facilmente</span>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'decorar-local': {
      bind(el, binding, vnode) {

        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;

        if (binding.arg == 'grande') {
          el.style.fontSize = '3rem';
        }

        if (binding.modifiers['negrilla']) {
          el.style.fontWeight = 'bold';
        }
      }
    }
  }
}
</script>

<style>

</style>
