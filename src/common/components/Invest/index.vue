<template lang="jade">
  div.investFooter(v-bind:style='containerStyle')
    ul(v-bind:style='sayingStyle')
      li(v-bind:style='itemStyle') 本活动最终解释权归一鼎金融所有
      li(v-bind:style='itemStyle') 如有疑问请联系客服：4006-553-888
      li(v-bind:style='itemStyle') 投资有风险，选择需谨慎
    p(@click='toInvest' v-bind:style='btnStyle') 立即投资
</template>
<style lang="stylus">
.investFooter
  ul
    padding-bottom 150px
    padding-top 50px
    li
      font-size 24px
      color #fff
      text-align center
      pointer-events none
      line-height 44px
  p
    position fixed
    bottom 0
    width 100%
    height 100px
    text-align center
    line-height 100px
    font-size 36px
    color #fff
    background #fdb23a
</style>
<script>
  import {open,login} from '@/modules/ydwMars';

  import Judge from '@/components/Judge/';

  Vue.use(Judge)

  export default{
    props:{
      containerStyle:{},
      sayingStyle:{},
      btnStyle:{},
      itemStyle:{},
      cb:null
    },
    methods:{
      toInvest(){
        if(this.cb){
          this.cb(this.judge)
        }else{
          this.judge()
        }
        
      },
      judge(){
        if(!!window.ydwToken&&window.ydwToken.length>10){
          open(2)
        }else if(!!window.ydwVersion){
          login()
        }else{
          this.$judge()
        }
      }
    }
  }
</script>
