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

import {getList as cartGetList } from "cart.js";
import {getList as shopGetList  } from "shop.js";