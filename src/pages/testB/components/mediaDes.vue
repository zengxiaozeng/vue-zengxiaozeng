<template>
  <div class="div start">
    <div class="container" v-if='isLoaded'>
      123
    </div>
    <div class="start_loading" v-else>
      	<div class="loading"></div>
    </div>
  </div>
</template> 
<script>

export default{
    components:{
    },
    data(){
      	return{
        	isLoaded: false
      	}
    },
    created(){
    	setTimeout(()=>{
      	this.isLoaded = true;
    	},1000);
    }
  }
</script>
<style lang="stylus">
.container{
}
.start{
  width: 100%;
  height: 100%;
}
.start_loading{
  height: 100%;
  width: 100%;
  background:  #fff;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 35px 0 rgba(200,200,110,.5);
  transition: all ease .3s;  
  .loading{
    width: 60px;
    height: @width;
    background: url('../img/cm_loading.png') no-repeat center center;
    background-size: @width;
    animation: loading 1.2s linear infinite;
  }
}
@keyframes loading{
  from {
    transform rotate(0)
  }
  to{
    transform rotate(360deg)
  }
  
}
</style>
