import Vue from 'vue'
import App from './App.vue'

// exportamos, para luego importar en nuestros componentes, y es una instancia de vue
// xq queremos emitir eventos dentro del bus, y vamos a estar mirando si tenemos eventos que han ocurrido
export let bus = new Vue({
    methods: {
        actualizarContador(numTareas) {
            this.$emit('actualizarContador', numTareas);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})