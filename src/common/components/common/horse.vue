<!-- 
  import vHorse from '@/components/common/horse';
  /**跑马灯**/
 -->
<template>
  <div ref="horseHeader" class="horse-header">
    <ul class="horseList" id="con1" ref="con1" :class="{anim:animateList==true}">
      <li v-for="(item,ind) in showMsg" :key='ind' class="inviteLi">{{item}}</li>
    </ul>
  </div>
</template>
<style lang="stylus">
.horse-header{
  height: 80px;
  width: 80%;
  background: #ffc25d;
  overflow: hidden;
  position: fixed;
  left: 10%;
  z-index: 10;
  top: 0;
  display: none;
  transition: all ease 0.3s;
  .inviteLi{
    font-size: 24px;
    height: 40px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    &:nth-child(2n){
      line-height: 30px; 
    }
  }
  .anim{
    transition: all 0.5s;
  }
}
</style>
<script>
export default {
  props:{
    showMsg: {
        type: Array
    }
  },
  data(){
    return {
      animateList:false
    }
  },
  created(){
    // this.init();
  },
  watch:{
    showMsg(to){
      // if(to.length){
      //   this.init()
      // }
    }
  },
  mounted(){
    setTimeout(()=>{
      this.init()
    },100)
  },
  methods:{
    init(){
      const _self = this;
      if(_self.showMsg.length > 0){
        if(_self.showMsg.length == 1){
            _self.showMsg.push(_self.showMsg[0],_self.showMsg[0],_self.showMsg[0])
        }else if(_self.showMsg.length == 2){
            _self.showMsg.push(_self.showMsg[0],_self.showMsg[1])
        }else if(_self.showMsg.length == 3){
            _self.showMsg.push(_self.showMsg[0])
        }else{
            _self.showMsg = _self.showMsg;
        }

        window.scrolltimer = setInterval(_self.scroll,2000);
        setTimeout(()=>{
          _self.$refs.horseHeader.style.display = 'block';
        },100)
      }
    },
    scroll(){//跑马灯
      let con1 = this.$refs.con1;
      con1&&(con1.style.marginTop='-80px');
      this.animateList=!this.animateList;
      let that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function(){
        that.showMsg.push(that.showMsg[0],that.showMsg[1]);
        that.showMsg.shift();
        that.showMsg.shift();
        this.animateList=false;
        con1&&(con1.style.marginTop='0px');
        that.animateList=!that.animateList;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      },500)
    }
  }
}
</script>
