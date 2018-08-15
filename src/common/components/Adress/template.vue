<template lang="jade">
Template(type='adress' v-bind:class="`transform_${i}`" v-bind:isShow='isShow' @update:isShow='V=>isShow=V')
  .adress-content(slot='content')
    h3 我的收货信息
    form
      p.clearfix 
        span.f-l 收件人姓名：
        input.f-l(v-model='username' @focus='focus(0)' v-focus="1" id='username' type='text' placeholder="请输入收件人姓名" maxlength=9)
      p.clearfix 
        span.f-l 联系方式：
        input.f-l(v-model='mobile' @focus='focus(1)' type='text' @input='checkMobile' placeholder="请输入手机号" maxlength=11)
      p.clearfix 
        span.f-l 详细地址：
        textarea.f-l(v-model='adress' @focus='focus(2)'  placeholder="请输入详细地址")
      label
        p 奖品将会根据您预留的邮寄地址于活动结束后7个工作日内寄出。如若未填写收货信息，则默认奖品8折折现，折现金额于活动结束后3个工作日内发放至您的【我的券包】中，请及时查收。
      label
        a(@click.prevent='save') 保存
</template>
<script>
import Template from "../common/altTemplate";
// import apis from '../../api/api';
import ajax from '@/modules/ajax';
import toast from '@/components/Toast/';
import {login} from '@/modules/ydwMars';

Vue.use(toast)
export default {
  components: { Template },
  data() {
    return {
      username: "",
      mobile: "",
      adress: "",
      isShow: false,
      i:0,
    };
  },
  mounted() {
    this.username='';
    this.mobile='';
    this.adress='';
  },
  watch:{
    isShow:function(nV,oV){
      let self=this;
      // !nV&&alert(nV)
      !nV&&(function(){
        self.username='';
        self.mobile='';
        self.address='';
      })()
    }
  },
  methods: {
    fill() {
      const self=this;      
      ajax({
        type:'post',
        url:config.apiGetAddress,
        data:{
          token:window.ydwToken
        },
        success(res){
          if(res.code==0){
            self.username=res.result.name;
            self.mobile=res.result.mobile;
            self.adress=res.result.address;
          }else{
            self.username='';
            self.mobile='';
            self.adress='';
          }
        }
      })
    },
    checkMobile() {
      this.mobile = this.mobile.replace(/[^\d]/g, "");
    },
    focus(i){
      this.i=i
    },
    save() {
      const self=this;
      if(window.ydwToken==''||window.ydwToken==undefined||window.ydwToken=='undefined'){
        login()
        return ;
      }
      if(this.username.trim()==''){
        this.$toast({
          msg:'请输入姓名!'
        })
        return ;
      }
      if(this.mobile.trim()==''){
        this.$toast({
          msg:'请输入手机号!'
        })
        return ;
      }
      if(this.adress.trim()==''){
        this.$toast({
          msg:'请输入详细地址!'
        });
        return ;
      }
      ajax({
        type:'post',
        url:config.apiSaveAddress,
        data:{
          name:self.username,
          mobile:self.mobile,
          address:self.adress,
          token:window.ydwToken,
        },
        success(res){
          if(res.code==0){
            self.$toast({
              msg:res.result
            })
            self.isShow=false;
            return ;
          }else{
            self.$toast({
              msg:res.result||res.errorMsg
            })
            return ;
          }
        },
        error(){
          // self.$toast({
          //     msg:res.result
          // })
            self.isShow=false;
        
        }
      })
    },
    
    // getParams: function() {
    //   var params = {};
    //   location.search
    //     .substr(1)
    //     .split("(&)")
    //     .forEach(function(item) {
    //       params[item.split("(=)")[0]] = item.split("(=)")[1];
    //     });
    //   return params;
    // }
  },
  directives:{
    focus:{
      inserted:(el)=>{
        el.focus()
      }
    }
  }
};

// export default vm
</script>

<style lang="stylus">
  .transform_0
    // transform translateY(0)
    padding-bottom 80px!important
  .transform_1
    // transform translateY(-50px)
    padding-bottom 180px!important
  .transform_2
    padding-bottom 280px!important
  .adress-content
    width 100%
    >h3
      border-bottom 1px solid #ddd
      font-size 30px
      font-weight 600
      text-align center
      height 110px
      line-height 90px
      color #333
    >form
      padding 0 40px
      label,>p
        &.clearfix
          // padding 30px
          margin-top 20px
        &:nth-child(4),&:nth-child(5)
          height 90px
          line-height @height
          display flex
          justify-content flex-start
          align-items center
        
        color #333
        font-size 28px
        >span
          width 168px
          // display flex
          // justify-content space-between
          text-align justify
          // line-height 0px
          margin-top 3px
          // display flex
          // justify-content space-between
          // align-items center
          &::after  
            content ""  
            display inline-block  
            width 100%
        >input
          // flex 1
          width 300px
          margin-top 2px
          // line-height 0px 
          &::placeholder
            color #999
            font-size 28px
        >textarea
          // flex 1
          width 300px
          height 100px
          // margin-top 70px
          resize none 
          border none
          &::placeholder
            color #999
            font-size 28px
        &:nth-child(4)
          // padding-top 70px
          font-size 24px
          line-height 34px
          height auto
        &:nth-child(5)
          padding-top 34px
          padding-bottom 30px
          // display 
          height auto
          >a
            margin 0 auto
            background #DF5257
            border-radius 100px
            height 90px
            width 240px
            text-align center
            line-height @height
            color #fff
            font-size 30px
            transition all ease 0.2s
            &:active
              opacity 0.5
</style>

