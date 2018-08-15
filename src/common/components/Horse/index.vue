<template lang="jade">
transition(name='fadeDown')
  .horseRaceMap(v-if='isShow')
    .content
      .box
        ul(v-bind:style='mtStyle' v-bind:class="isStop")
          li(v-for='(item,index) in newHorseData' v-bind:key='index') {{item}}
        ul(ref='list-1')
          li(v-for='(item,index) in newHorseData' v-bind:key='index') {{item}}
        //- ul(ref='list-2')
        //-   li(v-for='(item,index) in newHorseData' v-bind:key='index') {{item}}
</template>
<style lang="stylus">
.fadeDown-enter-active,.fadeDown-active
  transition all ease 0.6s
.fadeDown-enter,.fadeDown-leave-to
  transform translateY(-100%)
.horseRaceMap
  position fixed
  top 0
  left 0
  z-index 10000
  width 100%
  *
    transition all ease 0.6s
  .content
    height 90px
    background rgba(0,0,0,.7)
    padding 15px 0
    overflow hidden
    .box
      height 100%
      width 100%
      overflow hidden
    ul
      &.stop
        transition none
      li
        text-align center
        color #fff
        font-size 24px
        line-height 30px
</style>
<script>
export default {
  props:['horseData'],
  data(){
    return {
      // horsedata: ["fsdd", "fffffffffff", "你好吗飞洒飞洒发", "还飞飞飞飞飞"]
      mtStyle:{
        'margin-top':0
      },
      isStop:'',
      // newHorseData:[],
    }
  },
  computed:{
      isShow(){
        return this.horseData.length>0;
      },
      newHorseData(){
        // return [1111,2222,3333,4444]
        return this.horseData.length%2?this.horseData.concat([this.horseData[0]]):this.horseData;

      },

    
  },
  watch:{
    newHorseData(){
      this.horseLamp()
    }
  },
  mounted(){
    this.newHorseData&&this.horseLamp()
  },
  methods:{
    horseLamp(){
      this.timer&&clearInterval(this.timer)

      this.timer=setInterval(()=>{
        this.isStop=''
        const mt=parseInt(this.mtStyle['margin-top'])
        if(mt==0){
          // console.log('start')
        }
        this.mtStyle['margin-top']=mt-60+'px';
        if(Math.abs(mt-60)>30*this.newHorseData.length){
          this.isStop='stop'
          this.mtStyle['margin-top']=0;

          setTimeout(()=>{this.isStop=''},200)
        
        }
      },2400)
    }
  }
};
</script>
