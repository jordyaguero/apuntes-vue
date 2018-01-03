new Vue({
    el: '.mouseMove',
    data: {
        x: 0,
        y: 0,
        contador: 0
    },
    methods: {
        modificar(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        sumar(cantidad) {
            return this.contador += cantidad;
        }
    }
});

// event.clientX, que es la coordenada del mouse en x
// event.clientY, que es la coordenada del mouse en y