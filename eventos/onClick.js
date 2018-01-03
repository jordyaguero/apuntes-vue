let app = new Vue({
    el: '.click',
    data: {
        contador: 0,
        nombre: 'jordy'
    },
    methods: {
        sumar() {
            return this.contador++;
        },
        restar() {
            return this.contador--;
        },
        alerta: function(mensaje) {
            alert(mensaje + this.nombre);
        }
    }
});