import Router from 'vue-router';

const Index=res=>require.ensure([],()=>res(require('../components/index.vue')),'index');
const MediaDes=res=>require.ensure([],()=>res(require('../components/mediaDes.vue')),'mediaDes');

Vue.use(Router);

const routers = new Router({
  routes:[
    {
      path:'/index',
      name:'index',
      component:Index,
    },
    {
      path:'/mediaDes',
      name:'mediaDes',
      component:MediaDes,
    },
    {
      path:'/',
      redirect:'index',
    }
  ]
})

routers.beforeEach((to, from, next) => {
  next();
})

export default routers;