import Vue from 'vue'
import App from './App.vue'

Vue.filter('suspensivos', function(mensaje) {
    return mensaje.substring(0, 10) + '...';
});

new Vue({
    el: '#app',
    render: h => h(App)
})