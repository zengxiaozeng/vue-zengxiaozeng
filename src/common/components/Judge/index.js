import JudgeComponent from './Judge.vue';

const Judge = {};

Judge.lock=false;

Judge.install=(Vue)=>{
  if(Judge.lock){return ;}
  
  Judge.lock=true;

  const JudgeConstructor=Vue.extend(JudgeComponent);

  const MyJudge=new JudgeConstructor();

  MyJudge.$mount(document.createElement('div'));

  document.body.appendChild(MyJudge.$el);

  Vue.prototype.$judge=(isCurrent=true)=>{
    MyJudge.current=isCurrent;

  }

};

export default Judge;