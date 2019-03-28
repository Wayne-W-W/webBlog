<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {};
  },
  props: {
    /**
     * 1 会非实时（屏幕滑动超过一定时间后）派发scroll 事件
     * 2 会在屏幕滑动的过程中实时的派发 scroll 事件
     * 3 不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动到底事件
     */
    listenScrollBottom: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        scrollY: true,
      });
      console.log(this.scroll);
      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on("scroll", (pos) => {
          this.$emit("scroll", pos);
        });
      }
      //
      if (this.listenScrollBottom) {
        this.scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.wrapper {
  // height: rem(590);
  height: 590px;
  overflow: hidden;
}
</style>