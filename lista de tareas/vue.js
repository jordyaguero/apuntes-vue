let data = {
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
}

// primer parametro de un componente, es el nombre a como nos vamos a referirnos a ese componente,
// osea en el html colocaremos <titulo></titulo>
// template nos sirve para decir que contenido html va ir dentro de nuestra etiqueta <titulo></titulo>
// data, dentro de un componente tiene que ser una funcion y retornar un objeto
Vue.component('titulo', {
    template: '<h2>{{title}}</h2>',
    data() {
        return { title: 'Lista De Tareas' };
    }
});

// methods en component no tiene que retornar un objeto como data 
Vue.component('nueva-tarea', {
    template: `
                <div class="input-group">
                    <input v-model="nuevaTarea" @keyup.13="agregarTarea" class="form-control" placeholder="nueva tarea">
                    <span class="input-group-btn">
                        <button @click="agregarTarea" class="btn  btn-primary" type="button">Agregar Tarea</button>
                    </span>
                </div>
            `,
    data() {
        return data;
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
        }
    }
});

Vue.component('mostrar-tareas', {
    template: `
                <ul class="list-group  tareas">
                    <li v-for="(tarea, indice) of tareas" v-bind:class="{terminada: tarea.terminada}" class="list-group-item  tareas-items">
                        {{tarea.texto}}
                        <span class="tareas-btn">
                            <button @click="tarea.terminada = !tarea.terminada" class="btn  btn-success  btn-sm" type="button">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <button @click="borrar(indice)"  class="btn  btn-danger  btn-sm" type="button">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </span>
                    </li>
                </ul>
                `,
    data() {
        return data;
    },
    methods: {
        borrar(indice) {
            data.tareas.splice(indice, 1);
        }
    }
});

let app = new Vue({
    el: '#app',
    data: data
});