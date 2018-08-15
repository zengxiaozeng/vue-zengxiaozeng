import OutCom from './Template.vue';

const Out = {lock:false};

Out.install=($)=>{
  if(Out.lock){return ;};

  Out.lock=true;

  const OutConstructor=Vue.extend(OutCom);

  const MyOut=new OutConstructor();

  MyOut.$mount(document.createElement('div'));

  document.body.appendChild(MyOut.$el);

  Vue.prototype.$outDate=(txt='活动未开始')=>{
    MyOut.txt=txt;
    MyOut.isShow=true;
  }
}

export default Out;