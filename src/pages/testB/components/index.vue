<template>
  <div class="container" @click='handleTo'>
    <div @click='handleTo'>下一页</div>
  </div>
</template> 
<script>

export default {
  components: {
  },
  created() {
  },
  methods: {
    handleTo(){
      this.$router.push({
        path: '/mediaDes'
      })
    }
  }
}
</script>
<style lang="stylus">
.container{
  font-size: 30px;
  >div{
    height: 100px;
    width: 300px;
    background: red;
    line-height: @height;
    color: #fff;
    font-size: @font-size;
    text-align: center;
  }
}
</style>
