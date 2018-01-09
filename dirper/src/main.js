import Vue from 'vue'
import App from './App.vue'

// definiendo un directiva global
// 1er parametro el nombre, 2do parametro un objeto, donde vamos a utilizar las funciones gancho
// para llamar a esta directiva se usa v-decorar
Vue.directive('decorar', {
    // el, es el elemento donde me encuentro
    bind(el, binding, vnode) {
        // con binding.value estamos pasando la informacion actual que tiene en el span que se
        // encuentra en app.vue
        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;
        //el.style.fontFamily = 'helvetica'

        if (binding.arg == 'grande') {
            el.style.fontSize = '2rem';
        }
        if (binding.arg == 'pequeno') {
            el.style.fontSize = '1.5rem'
        }

        // con binding.modifiers es para utilizar modificadores
        // si hay algun modificador llamado negrilla, hacer:
        if (binding.modifiers['negrilla']) {
            el.style.fontWeight = 'bold';
        }
        // si hay algun modificador llamado italico, hacer:
        if (binding.modifiers['italico']) {
            el.style.fontStyle = 'italic';
        }
    }
})

new Vue({
    el: '#app',
    render: h => h(App)
})