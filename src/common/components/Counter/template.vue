<template lang="jade">
Template(type='counter' class="transform_4" v-bind:isShow='isShow' @update:isShow='v=>isShow=v')
  div.counter-content(slot='content')
    h3 年化投资计算器
    ul
      li.clearfix
        span 投资金额
        span &nbsp;元
        input(v-model='investMoney ' v-focus='1' type='number' oninput="if(value.length>5)value=value.slice(0,10)" @blur='blur' maxlength=10)
      li.clearfix
        span 投资期限
        span &nbsp;天
        input(v-model='investDuration' type='number'  maxlength=8  @blur='blur' oninput="if(value.length>5)value=value.slice(0,8)")
      li.clearfix
        span 年化投资额
        span {{investDay | toPoint}}
      li
        p 年化投资额=投资金额*投资期限(天)/365
</template>
<script>
import Template from "../common/altTemplate";

Vue.filter("toPoint", v => {
  if (v == 0) {
    return "0.00";
  } else {
    if (String(v).indexOf(".") == -1) {
      return v + ".00";
    }
    let vB = String(v).split(".")[0];
    let vS = String(v).split(".")[1];

    if (vS.length == 1) {
      return vB + "." + vS + "0";
    }

    if (vS.length == 2) {
      return vB + "." + vS;
    }

    vS = vS.slice(0, 2) + "." + vS.slice(2, 3);

    vS = Math.round(Number(vS));

    if (vS < 10) {
      return vB + ".0" + vS;
    }
    return vB + "." + vS;
  }
});

// Vue.filter('toNum',v=>(
//   v.replace(/[^\d]/g,'')
// ))

window.oldHeight = window.innerHeight;



export default {
  components: { Template },
  data() {
    return {
      isShow: false,
      investMoney: "",
      investDuration: "",
      // investDay: "0.00",
      i: 0,
      innerHeight: window.innerHeight,
      oldHeight: window.innerHeight
    };
  },
  // mounted(){
  //   window.onresize=function(){
  //     if(window.innerHeight<=750&&window.isiOS){
  //       document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').style.visibility='hidden':'';

  //     }else{
  //       document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').style.visibility='visible':''

  //     }
  //   }
  // },
  mounted() {
    const self = this;
  },
  watch: {
    // investMoney(v){
    //   this.investMoney=v.replace(/[^\d||.]/g,'')
    // },
    // investDuration(v){
    //   this.investDuration=v.replace(/[^\d]/g,'')
    // },
    // innerHeight(v){
    //   if(this.oldHeight>v){
    //     alert(1)
    //   }
    // },
    isShow(newV, oldV) {
      if (window.isAndroid) {
        return;
      }
    }
  },
  computed: {
    investDay() {
      return this.investMoney && this.investDuration
        ? Number(this.investMoney) * Number(this.investDuration) / 365
        : "0.00";
    }
  },
  methods: {
    checkMoney() {
      if (this.investMoney > 10000000) {
        this.investMoney = 10000000;
        return;
      }
      this.investMoney = this.investMoney.replace(/[^\d]$/g, "");
      this.calc();
    },
    checkDuration() {
      if (this.investDuration > 999) {
        this.investDuration = 999;
        return;
      }
      this.investDuration = this.investDuration.replace(/[^\d]$/g, "");
      // this.calc();
    },
    // calc() {

    // },
    focus(i) {
      if (window.isAndroid) {
        return;
      }
      this.i = i;
      // document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').className=document.querySelector('.btn-bottom').className.replace(/current/g,''):'';
    },
    blur() {
      if (window.isAndroid) {
        return;
      }
      // setTimeout(()=>{

      // document.querySelectorAll('.btn-bottom').length>0?document.querySelector('.btn-bottom').className+='current':''

      // },200)
    }
  },
  directives: {
    focus: {
      inserted: el => {
        el.focus();
      }
    }
  }
};
</script>

<style lang="stylus">
  // for i in range(0,1,10)
  .transform_0
    // transform translateY(0)
    // padding-bottom 80px!important
  .transform_1
    // transform translateY(-50px)
    // padding-bottom 180px!important
  // .transform_4
  //   // padding-bottom 280px!important
  //   .tem-close
  //     margin-top -440px
    // transform translateY(-100px)
  .counter-content
    width 100%
    >h3
      border-bottom 1px solid #ddd
      font-size 30px
      font-weight 600
      text-align center
      height 110px
      line-height 90px
      color #333
    >ul
      >li
        height 90px
        padding 30px
        border-bottom 1px solid #ddd
        // display flex
        // justify-content space-between
        // align-items center
        // padding 
        color #333
        font-size 28px
        >* 
          float right
        span:first-child 
          float left
          width 180px
        input
          width 270px
          // background #ff9
          text-align right 
          // flex 1
          // padding-right 8px
        &:nth-child(3)
          border none
        &:nth-child(4)
          color #666
          display flex
          justify-content center
          font-size 24px                    
</style>

