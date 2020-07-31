<!-- cp-input -->
<template>
  <div class="cp-input-container">
    <input
      v-model="inputValue"
      :class="['cp-input', validatorTip ? 'input-warning' : '']"
      :type="type"
      :minlength="minlength"
      :maxlength="maxlength"
      :placeholder="placeholder"
      @input="_handleInput"
      @focus="_handleFocus"
      @blur="_handleBlur"
      @keyup="keyupToHandle"
    />
    <div v-if="required && isShowErrTip" class="require-warning">
      *{{ message }}
    </div>
    <div v-else-if="required && validatorTip" class="require-warning">
      *{{ validatorTip }}
    </div>
    <slot name="tip"></slot>
  </div>
</template>

<script>
// type: input标签type
// value: input标签value
// placeholder: input标签placeholder
// required: input是否必填
// message: input表演验证，必填错误提示
// validator: 自定义input表演验证方法

export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    // eslint-disable-next-line vue/require-default-prop
    value: [String, Number],
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
    maxlength: {
      type: Number,
      default: null,
    },
    minlength: {
      type: Number,
      default: null,
    },
    // eslint-disable-next-line vue/require-default-prop
    validator: Function,
    keyup: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: this.value,
      isShowErrTip: false,
      validatorTip: null,
    }
  },
  watch: {
    value(val) {
      // 解决手动设置v-model的value为空 组件不清空数据
      if (!val) {
        this.inputValue = ''
      } else {
        this.inputValue = val
      }
    },
  },
  mounted() {
    // 创建子表单组件
    this.$parent.$emit('setParentForm', this)
  },
  beforeDestroy() {
    // 销毁子表单组件
    this.$parent.$emit('deleteParentForm', this)
  },
  methods: {
    keyupToHandle() {
      if (!this.keyup) {
        return
      }
      this.isShowErrTip = !this.inputValue
      if (this.validator) {
        this.validatorTip = this.validator('', this.inputValue)
      }
      return !this.isShowErrTip && !this.validatorTip
    },
    _handleInput(e) {
      this.$emit('input', this.inputValue)
    },
    _handleBlur() {
      // blur 校验
      this.isShowErrTip = !this.inputValue
      if (this.validator) {
        this.validatorTip = this.validator('', this.inputValue)
      }
      return !this.isShowErrTip && !this.validatorTip
    },
    _validate(cb) {
      // validate
      this.isShowErrTip = !this.inputValue
      if (this.validator) {
        this.validatorTip = this.validator('', this.inputValue)
      }
      // eslint-disable-next-line standard/no-callback-literal
      if (cb) cb(!this.isShowErrTip && !this.validatorTip)
    },
    _handleFocus() {},
  },
}
</script>
<style lang="scss">
.cp-input-container {
  position: relative;
  font-size: 14px;
  @include layout-responsive(margin-bottom, vw(12), 15px, 15px, 15px);
  input {
    outline: 0;
    color: #223628;
    border: 1px solid #223628;
    box-sizing: border-box;
    @include layout-responsive(height, vw(35), 36px, 36px, 36px);
  }
  input::-webkit-input-placeholder {
    color: $color-lighter-green;
  }
  input:-ms-input-placeholder {
    color: $color-lighter-green;
  }
  .cp-input {
    width: 100%;
    display: block;
    cursor: pointer;
    @include layout-responsive(text-indent, vw(10), 10px, 10px, 10px);
  }
  .input-warning {
    color: #df1d63;
  }
  .require-warning {
    color: #df1d63;
    text-align: left;
    text-indent: 0;
    @include layout-responsive(padding-top, vw(5), 5px, 5px, 5px);
    @include layout-responsive(padding-left, vw(6), 6px, 6px, 6px);
  }
}
</style>
