<!-- cp-form -->
<template>
  <div class="form-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [],
    }
  },
  created() {
    this.$on('setParentForm', item => {
      // 监控children 添加 子表单组件
      if (item) this.fields.push(item)
    })
    this.$on('deleteParentForm', item => {
      // 监控children 删除 销毁的子组件
      if (item) this.fields.splice(this.fields.indexOf(item), 1)
    })
  },
  methods: {
    validate(cb) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field._validate(error => {
            if (!error) valid = false
            count++
            if (count === this.fields.length) {
              resolve(valid)
              if (typeof cb === 'function') cb(valid)
            }
          })
        })
      })
    },
  },
}
</script>
<style lang="scss"></style>
