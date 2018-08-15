import Template from './template.vue';

const Counter={lock:false}

Counter.install=($)=>{
  if(Counter.lock){return ;}

  Counter.lock=true;

  const CounterConstructor=$.extend(Template);

  const MyCounter=new CounterConstructor();

  MyCounter.$mount(document.createElement('div'));

  document.body.appendChild(MyCounter.$el);

  $.prototype.$counter=(isShow=true)=>{
    MyCounter.isShow=isShow
  }
}

export default Counter;