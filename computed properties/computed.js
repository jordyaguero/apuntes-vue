new Vue({
    el: '#vm',
    data: {
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0,
        quinto: 0,
        suma: 0
    },
    // las propiedades de computed van hacer calculadas automaticamente
    // si algunos de los valores en computed cambian
    computed: {
        total() {
            return this.primero + this.segundo + this.tercero + this.cuarto;
        }
    }
});