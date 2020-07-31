<!-- dialog 通用组件 -->
<template>
  <div
    v-if="isShow"
    class="dialog-container"
    @click.stop="hanleBlankClose($event)"
  >
    <div class="content">
      <div class="main">
        <div class="header">
          <div class="title">{{ title }}</div>
          <img
            class="icon-close"
            src="@/assets/svg/icon-close.svg"
            @click="handleClose"
          />
        </div>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClose() {
      this.$emit('postDialogShow', false)
    },
    hanleBlankClose(e) {
      if (e.target.className === 'content') {
        this.$emit('postDialogShow', false)
      }
    },
  },
}
</script>
<style lang="scss">
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 2001;
  background: rgba(224, 233, 231, 0.5);
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .main {
      position: relative;
      box-sizing: border-box;
      @include layout-responsive(width, vw(300), 500px, 840px);
      @include layout-responsive(padding, vw(20), 57px, 57px, 57px);
      @include layout-responsive(margin-left, vw(10), 0, 0, 0);
      @include layout-responsive(margin-right, vw(10), 0, 0, 0);
      background-color: #fff;
      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @include layout-responsive(padding-bottom, vw(0), 10px, 10px, 10px);
        .title {
          color: #223628;
          font-size: 13px;
          @include layout-responsive(font-size, vw(13), 16px, 16px, 16px);
        }
        .icon-close {
          position: absolute;
          cursor: pointer;
          @include layout-responsive(width, vw(15), 20px, 20px, 20px);
          @include layout-responsive(height, vw(15), 20px, 20px, 20px);
          @include layout-responsive(top, vw(20), 20px, 20px, 20px);
          @include layout-responsive(right, vw(20), 20px, 20px, 20px);

          &:hover {
            animation: rotAni 1s forwards;
          }
        }
      }
    }
  }
}
@keyframes rotAni {
  to {
    transform: rotate(180deg);
  }
}
</style>
