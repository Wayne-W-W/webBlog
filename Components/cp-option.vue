<!-- cp-option -->
<template>
  <div class="cp-select-option" @click="handleOption">
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    label: [String, Number],
    // eslint-disable-next-line vue/require-default-prop
    value: [String, Number],
  },
  data() {
    return {}
  },
  mounted() {
    if (+this.$parent.value === +this.value) {
      // 编辑状态时，父组件select-value有默认值时
      this.$parent.$emit('setParentValue', {
        label: this.label,
        value: this.value,
      })
    }
  },
  methods: {
    handleOption() {
      this.$parent.$emit('setParentValue', {
        label: this.label,
        value: this.value,
      })
    },
  },
}
</script>
<style lang="scss">
.cp-select-option {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  @include layout-responsive(height, vw(34), 34px, 34px, 34px);
  @include layout-responsive(line-height, vw(34), 34px, 34px, 34px);
  @include layout-responsive(text-indent, vw(10), 10px, 10px, 10px);
}
.cp-select-option:hover {
  color: #223628;
}
.cp-select-option:active {
  color: #223628;
}
</style>
