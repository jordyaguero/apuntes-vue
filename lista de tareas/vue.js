new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de Tareas',
        tareas: [{
                texto: 'Aprender vue.js',
                terminada: false
            },
            {
                texto: 'Aprender react.js',
                terminada: false
            },
            {
                texto: 'Aprender ionic.js',
                terminada: false
            }
        ],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea() {
            let texto = this.nuevaTarea.trim();

            if (texto) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                });
            }
            this.nuevaTarea = '';
        },
        borrar(indice) {
            this.tareas.splice(indice, 1);
        }
    }
});