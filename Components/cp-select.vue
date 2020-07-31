<!-- cp-select -->
<template>
  <div v-click-outside="outsideClose" class="cp-select">
    <div
      :class="[
        'cp-select-content',
        disable ? 'cp-select-header-disable' : 'color-block',
      ]"
      @click="handleDown"
    >
      <div v-if="currentValue" :class="['cp-select-header']">
        {{ currentLabel }}
      </div>
      <div v-else class="cp-select-header color-gray">
        {{ placeholder }}
      </div>
      <template v-if="disable">
        <img
          class="icon-arrow-close"
          src="@/assets/svg/icon-new-arrow-down-gray.svg"
        />
      </template>
      <template v-else>
        <img
          v-if="isShowDown"
          class="icon-arrow-close"
          src="@/assets/svg/icon-new-arrow-up-block.svg"
        />
        <img
          v-else
          class="icon-arrow-close"
          src="@/assets/svg/icon-new-arrow-down-block.svg"
        />
      </template>
    </div>

    <div v-show="isShowDown && !disable" class="down-content">
      <slot></slot>
    </div>
    <div v-if="required && isShowErrTip" class="require-warning">
      *{{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: [String, Number],
    defaultLabel: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
      currentLabel: '',
      isShowDown: false,
      isShowErrTip: false,
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
  },
  mounted() {
    // 创建子表单组件
    if (this.required) {
      this.$parent.$emit('setParentForm', this)
    }
    if (this.defaultLabel) {
      this.currentLabel = this.defaultLabel
    }
  },
  beforeDestroy() {
    // 销毁子表单组件
    this.$parent.$emit('deleteParentForm', this)
  },
  created() {
    this.$on('setParentValue', status => {
      this.currentValue = status.value
      this.currentLabel = status.label
      this.isShowDown = false
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue, this.currentLabel)
      this._handleBlur()
    })
  },
  methods: {
    outsideClose() {
      this.isShowDown = false
    },
    handleDown() {
      if (this.disable) return
      this.isShowDown = !this.isShowDown
    },
    _handleBlur() {
      this.isShowErrTip = !this.currentValue
    },
    _validate(cb) {
      this.isShowErrTip = !this.currentValue
      // eslint-disable-next-line standard/no-callback-literal
      if (cb) cb(!this.isShowErrTip)
    },
  },
}
</script>
<style lang="scss">
.cp-select {
  width: 100%;
  text-align: left;
  position: relative;
  cursor: pointer;
  @include layout-responsive(margin-bottom, vw(15), 15px, 15px);
  .require-warning {
    font-size: 14px;
    color: #df1d63;
    text-align: left;
    @include layout-responsive(padding-top, vw(5), 5px, 5px);
    @include layout-responsive(padding-left, vw(6), 6px, 6px);
    text-indent: 0;
  }
  .cp-select-content {
    width: 100%;
    border: 1px solid #223628;
  }
  .cp-select-header {
    // @include layout-responsive(width, vw(66), 170px, 170px);
    @include layout-responsive(width, vw(66), 100%, 100%);
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    @include layout-responsive(height, vw(33), 34px, 34px);
    @include layout-responsive(line-height, vw(33), 34px, 34px);
    @include layout-responsive(text-indent, vw(10), 10px, 10px);
  }
  .cp-select-header-disable {
    border: 1px solid #e0e9e7;
    color: #e0e9e7 !important;
  }
  .icon-arrow-close {
    position: absolute;
    right: 14px;
    margin-top: -5px;
    @include layout-responsive(top, vw(18), 20px, 20px);
    @include layout-responsive(width, vw(10), 14px, 14px);
    @include layout-responsive(height, vw(8), 10px, 10px);
  }
  .color-block {
    color: #223628;
  }
  .color-gray {
    color: $color-lighter-green;
  }
  .down-content {
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 103;
    font-size: 14px;
    color: $color-lighter-green;
    background-color: #fff;
    overflow-y: scroll;
    @include layout-responsive(max-height, vw(136), 136px, 136px);
    @include layout-responsive(top, vw(34.5), 35px, 35px);
    @include layout-responsive(
      border,
      1px solid $color-dark-green,
      1px solid $color-dark-green,
      1px solid $color-dark-green
    );
    border-top: none;
  }
}
</style>
