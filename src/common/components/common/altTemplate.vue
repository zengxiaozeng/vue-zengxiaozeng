<template lang="jade">
transition(name='content')  
  div(v-if='isShow' v-bind:class='type | convertClass')
    div
      div(class='tem-close')
        span(@click='close')
      div(v-bind:class='type | convertContent')
        slot(name='content' class='fffff')
</template>
<script>

Vue.filter('convertClass',v=>{
  return window.isiOS?`${v} tem-wrapper`:`${v} androidSev tem-wrapper`
})
Vue.filter('convertContent',v=>`${v} tem-content`)

export default {
  data() {
    return {
      timer:null,
    };
  },
  props:['type','isShow'],

  watch:{
    isShow(v){
      if(v){
        document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').style.position='relative':'';
        
      }else{
        setTimeout(()=>{
  
          document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').style.position='fixed':'';
          
        },200)        
      }
    }
  },

  methods: {
    close() {
      // this.timer&&clearTimeout(this.timer);
      // setTimeout(()=>{
        // document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').style.visibility='visible':'';
        // document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').style.bottom='-200px':'';
        // alert(1212)
        this.$emit('update:isShow',false);
      // },200)
    }
  }
};
</script>

<style lang="stylus">
input,textarea 
  -webkit-tap-highlight-color transparent
// .content-enter-active,.content-leave-active
//   transition all ease 0.3s
// .content-enter
//   transform scale(1.2)
//   opacity 0
// .content-leave-to
//   transform scale(1.3)
//   opacity 0
.tem-wrapper
  position fixed
  top -500000px
  left 0
  height 10000000px
  width 100%
  z-index 100
  background rgba(0,0,0,.4)
  &.androidSev
    top 0
    height 100%
  // padding
  
  // transition all ease 0.2s
  >div
    position fixed
    z-index 110
    height 100%
    top 0
    left 0
    background transparent
    // display flex
    // flex-direction column
    // justify-content center
    // align-items center
    padding 80px 60px 80px

  .tem-close
    height 110px
    // display flex
    // justify-content flex-end
    // align-items flex-start
    width 100%
    >span
      // display block
      float right
      height 60px
      width @height
      background url('./close.png') no-repeat center center 
      background-size contain
      transition transform ease 0.2s
      &:active
        transform scale(0.3)
  .tem-content
    background #fff
    box-shadow 0 0 40px -25px rgba(0,0,0,.4)
    padding 0 30px
    border-radius 10px
    width 100%
</style>