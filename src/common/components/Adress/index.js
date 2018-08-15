import AdressTem from './template.vue';

const Adress={
  lock:false
};

Adress.install=($)=>{
  if(Adress.lock){return ;}

  Adress.lock=true;

  const AdressConstructor=$.extend(AdressTem);

  const MyAdress=new AdressConstructor();

  MyAdress.$mount(document.createElement('div'));

  document.body.appendChild(MyAdress.$el);

  $.prototype.$adress=(isShow=true)=>{
    
    MyAdress.fill()
    
    MyAdress.isShow=isShow;


  };

}

export default Adress;
