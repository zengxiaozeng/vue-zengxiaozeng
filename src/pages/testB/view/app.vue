<template lang='jade'>
  .wrap
      router-view(class='my-view') 
</template>
<style lang="stylus">
  html
    height 100%
	body 
		height 100%
	.wrap
    height 100%
    .my-view
      transition all .4s cubic-bezier(.55,0,.1,1)
</style>
<script>
  import setTitle from '@/modules/title';
  export default {
    data(){
      return{
        isLoaded:false
       }
    },
    created(){
      setTitle('媒体报道');
    },
  }
</script>