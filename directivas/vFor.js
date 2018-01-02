let app = new Vue({
    el: '.vFor',
    data: {
        paises: ['peru', 'colombia', 'uruguay'],
        lugares: [{ nombre: 'machupicchu' },
            {
                nombre: 'cuzco'
            },
            {
                nombre: 'otuzco'
            }
        ],
        empleado: {
            nombre: 'jordy',
            edad: 24,
            nacionalidad: 'perú',
            profesion: 'Ing Informático',
            empresa: 'google',
            celular: 960706650
        }
    }
});