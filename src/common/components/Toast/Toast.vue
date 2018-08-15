<template>
    <div :class='typeClass' >
        <transition name='toast'>
            <div class="toast-content" v-if='toastShow'>
                <span >
                {{toastTxt}}
            </span>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  data() {
    return {
      toastShow: false,
      toastTxt: "",
      type: "middle"
    }
  },
  computed: {
    typeClass() {
      return `my-toast ${this.type}`
    }
  }
}
</script>
<style lang="stylus">
    .my-toast 
        position fixed
        max-width 90%
        width auto
        // top 50%
        left 50%
        transform translate(-50%,-50%)
        z-index 10000000000000
        &.middle
            top 50%
            // left 50%
        &.top
            top 180px
        &.bottom 
            bottom 180px
        .toast-content
            margin 0 auto
            background rgba(0, 0, 0, 0.8)
            // width 600px
            padding 10px 34px
            min-width 300px
            text-align center
            span
                color #fff
                font-size 26px
                text-align center
                line-height 48px
    .toast-enter-active, .toast-leave-active
        transition all linear 0.3s
    .toast-enter, .toast-leave-to
        opacity 0
        // transform scale(0)
        background rgba(0, 0, 0, 0)
</style>