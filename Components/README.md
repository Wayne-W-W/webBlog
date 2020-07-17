### form组件 && input组件

#### 用法
```html
<ks-form ref="Form">
  <ks-input  
    v-model="form.phoneNum"
    :required="true"
    :placeholder="'请输入您的手机号'"
    :message="'请输入您的手机号'"
    :validator="validatePhonePass"
  ></ks-input>
  <div @click="handleSubmit">立即注册</div>
</ks-form>
```
```js
import ksInput from '@/components/common-compts/input.vue'
import ksForm from '@/components/common-compts/form.vue'

components: {
  ksInput,
  ksForm
},
data() {
  return {
    validatePhonePass: (rule, value) => {
      const rePhone = /^1[345789]\d{9}$/
      if (!rePhone.test(value)) {
        return '填写正确格式的手机号'
      }
    },
  }
}
methods: {
  handleSubmit() {
    this.$refs.ksForm.validate(valid => {
      if (valid) console.log('提交成功')
      else console.log('校验失败')
    })      
  },
}
```

### Input Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| v-model | 支持双向数据绑定 | String |  |  |
| placeholder | input提示信息 | String |  | 空 |
| minlength | 最小输入长度 | Number |  |  |
| maxlength | 最大输入长度 | Number |  |  |
| required | 是否表单验证 | Boolean | true/false | false |
| message | 必填为空时提示 | String |  | 空 |
| validator | 对单个表单项目进行校验的方法 | Function |  | 空 |

### Ks-Select组件

#### 用法
```html
<select
  v-model="form.appellate"
  :required="true"
  :message="'请输入选择称谓'"
  :placeholder="'请选择'"
>
  <option :label="'先生'" :value="'0'"></option>
  <option :label="'女士'" :value="'1'"></option>
</select>
```
```js
import Input from '@/components/common-compts/input.vue'

components: {
 Input,
},
```
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| v-model | 支持双向数据绑定 | String |  |  |
| placeholder | input提示信息 | String |  | 空 |
| required | 是否验证 | Boolean | true/false | false |
| message | 必填为空时提示 | String |  | 空 |


