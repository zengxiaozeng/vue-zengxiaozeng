import App from './app.vue'
import Judge from '@/components/Judge/'

Vue.use(Judge)

new Vue({
  el:'#app',
  components:{App},
  template:'<App />'
})