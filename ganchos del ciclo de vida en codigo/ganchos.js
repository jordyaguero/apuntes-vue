new Vue({
    el: '.gancho',
    data: {
        mensaje: 'Este es el mensaje'
    },
    beforeCreate() {
        console.log("este es beforeCreate");
    },
    created() {
        console.log("este es created");
    },
    beforeMount() {
        console.log("Este es beforeMount");
    },
    mounted() {
        console.log("este es mounted");
    },
    beforeUpdate() {
        console.log("Este es beforeUpdate");
    },
    updated() {
        console.log("Este es updated");
    },
    beforeDestroy() {
        console.log("este es beforeDestroy");
    },
    destroyed() {
        console.log("este es destroyed");
    },
    methods: {
        destruir() {
            // el simbolo $ quiere decir algo que nosotros no creamos
            this.$destroy();
        }
    }
});