深入理解ES6的模块.js

1.export可以导出任何的顶级变量 : function、class、var、let、const。

2.从一个模块导入多个变量：
import { Afun , Bfun } from '../util/index.js';

当运行一个包含import声明的模块，会先导入要导入的模块并加载，然后根据深度优先级的原则遍历依赖图谱来执行对应模块，并跳过已经执行的模块，避免循环。

3.导出列表，把要导出的功能名写在一个列表里，用大括号括起来，这样就不用在每个要导出的功能前面加上export标记。。
export { classA , filterFun , yader };//导出列表
let classA =  '小明';
function filterFun (){
	...
} ;
class yader { ... }

4.重命名导出和导入。有时，导入的变量与一些变量名冲突了，可以重命名导入的变量。
//重命名导入
import {getList as cartGetList } from "cart.js";
import {getList as shopGetList  } from "shop.js";

//重命名导出，使用不同名字导出相同功能。
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

5.默认的导出，导出名为default
let myObject = {
  field1: value1,
  field2: value2
};
export {myObject as default};
//或者简写
export default {
  field1: value1,
  field2: value2
};
export default关键词后面可以跟任何值：一个函数、一个类、一个对象，所有能被命名的变量。

6.模块对象
import * as cows from "cows";
当使用 import* 的时候，被引入的是一个模块命名空间对象，它的属性是模块的输出。
如果 "cows" 模块导出一个名为moo()的函数，那么在导入“cows”之后，你可以使用cows.moo()来进行调用。

7.聚合模块，导入包所有的模块。
export * from "singapore";























