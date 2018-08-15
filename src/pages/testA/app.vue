<template lang="jade">
  .wrapper
    header
    main
      h3 
        hr
        i  更多活动
        hr
      section(@click='toInvite')
    footer
      p 最终解释权归XXXX所有
      p 如果有疑问请联系客服：XXXX-XXX-XXX
      p 投资有风险，选择需谨慎
      button(@click='toInvest') 
        span 立即投资
</template>
<style lang="stylus">
  .wrapper
    background #2ca556
    header
      height 1287px
      background url('./img/banner.jpg') no-repeat center center
      background-size 100% 100%
    main
      width 680px
      margin 0 auto 
      padding-top 80px
      h3
        display flex
        height 40px
        align-items center
        i
          color #15562c
          font-size 30px
          padding 0 50px
        hr
          height 2px
          background #258c47
          flex 1
      section
        margin-top 30px
        height 260px
        background url('./img/invite.png') no-repeat center center
        background-size 100% 100%
    footer
      padding 40px 0 120px
      p    
        text-align center
        font-size 26px
        line-height 50px
        pointer-events none
        color #1d7239
      button 
        position fixed
        width 750px
        height 100px
        bottom 0
        left 50%
        margin-left -375px
        display flex
        justify-content center
        align-items center
        text-align center
        font-size 32px
        color #fff
        background #20733b
        span
          flex 1
          text-align center
</style>
<script>
  import setTitle from '@/modules/title'
  import  '@/modules/token'
  import { open , login } from '@/modules/ydwMars'
  // import {originWeb} from '@/api/api.js'

  export default {
    created(){
      setTitle('播种绿色 呵护收益')
      checkUser()
    },
    methods:{
      toInvest(){
        alert(2)
      },
      toInvite(){
        alert(1)
      }
    }
  }
</script>
