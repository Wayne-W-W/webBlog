'use strict';

console.log();
// exit方法会在当进程退出的时候执行
process.on('exit', () => {
  console.log();
});

// process.argv返回命令行脚本的各个参数组成的数组
if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fileSave = require('file-save'); // // 保存文件
const uppercamelcase = require('uppercamelcase'); // 骆驼拼写法
// 通过命令行传入两个参数
// 第一个参数是组件的英文名，第二个参数是组件的中文名
// node new.js test-component '测试组件'
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
// 输入英文名转为驼峰式
const ComponentName = uppercamelcase(componentname);
// 获取componentname组件绝对路径
const PackagePath = path.resolve(__dirname, '../packages', componentname);

const indexVue =`<template>
<div>

</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang='scss'>

</style>`

const mainJson = `{
  "navigationBarTitleText": ""
}`
const mainJs = `import Vue from "vue"
import App from "./index"

const app = new Vue(App)
app.$mount()`



// 添加到 app.json
const componentsFile = require('../packages/app.json');
// 判断是否存在

for (const item of componentsFile.pages) {
  if (item === `pages/${ComponentName}/main`) {
      console.error(`${ComponentName} 已存在.`);
      process.exit(1);
  }
}

componentsFile.pages.push(`pages/${ComponentName}/main`)
fileSave(path.join(__dirname, '../packages/app.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

fileSave(path.join(PackagePath, 'index.vue'))
  .write(indexVue, 'utf8')
  .end('\n');

fileSave(path.join(PackagePath, 'main.json'))
  .write(mainJson, 'utf8')
  .end('\n');

fileSave(path.join(PackagePath, 'main.js'))
  .write(mainJs, 'utf8')
  .end('\n');


console.log('DONE!');
