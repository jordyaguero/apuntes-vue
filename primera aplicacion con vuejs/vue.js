
// comenzamos la aplicacion con new Vue
// el parametro el jala la clase o id de nuestra aplicacion que esta en html

// enlace de datos entre mensaje y el dom con la interpolacion {{mensaje}}
let app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'aprende Vuejs facilmente'
    }
});