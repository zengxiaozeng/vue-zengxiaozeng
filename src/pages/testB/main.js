import App from './view/app.vue';
import router from './route/router';
import 'mint-ui/lib/style.css';
import 'babel-polyfill';

new Vue({
    el:'#app',
    template: '<App />',
    components:{App},
    router,
})