// data es para las propiedades
// methods es para los metodos

let app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'Hola mundo',
        src: 'images/logo.png'
    },
    methods: {
        mostrarMensaje() {
            //return "Estoy aprendiendo a programar vue.js";
            return this.mensaje;
        }
    }
});