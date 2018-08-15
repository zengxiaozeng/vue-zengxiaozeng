<template lang="jade">
transition(name='fade')
  div.outDate(v-bind:class='' v-show='isShow')
    .content
      img(src='https://image.youdingkeji.com/H5/icon/close.png' @click='close')
      p {{txt}}
</template>
<style lang="stylus" scoped>
// *
//   transition all ease 0.3s
.fade-enter-active,.fade-leave-active
  // visibility visible
  // opacity 1
  transition all ease 0.3s
.fade-leave-to,.fade-enter
  // visibility hidden
  // opacity 0
  background rgba(0,0,0,0)
  .content
    // transition transform 0.35s ease  
    // height 0
    transform scaleY(0)
.outDate
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0,0,0,.5)
  display flex
  justify-content center
  align-items center
  padding-bottom 200px
  .content
    padding 70px 75px 100px
    // position fixed
    width 100%
    img
      width 60px
      // height 
      float right
    p
      margin-top 100px
      background #fff
      width 100%
      // min-height 250px
      display flex
      justify-content center
      align-content center
      font-weight 600
      // height 
      border-radius 12px
      box-shadow 0 0 30px -10px rgba(0,0,0,.4)
      padding 100px 30px
      text-align center
      font-size 30px
      line-height 48px
</style>

<script>
  export default {
    data(){
      return{
        txt:'活动未开始',
        isShow:false,
      }
    },
    methods:{
      close(){
        this.isShow=false;
      }
    }
  }
</script>