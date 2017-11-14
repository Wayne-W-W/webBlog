
es6常见语法

一 let const

let 和var 区别在于，let有块级作用域的区分概念。
常见的使用场景：比如一个页面有5个li，索引当然是0，1，2，3，4。点击某一个li，显示该li的索引。

var oLi= document.querySelectorAll('li')
for (var i = 0,len = oLi.length; i < len; i++){
    oLi[i].onclick = function(){
        console.log(i)
    }
}
这样写，其实无论点击那个li，都是显示5。因为当点击li的时候，上面的代码已经执行完了，那么每个i，就是等于5，就显示5。

用let就不会出现这个问题
var oLi= document.querySelectorAll('li')
for (let i = 0,len = oLi.length; i < len; i++){
    oLi[i].onclick = function(){
        console.log(i)
    }
}
用了let，如果点击第一个li，就显示0，点击第三个li，就显示2。

const初始化赋值之后就不能再改变赋值。

二 arrow function  箭头函数
es5写法:		function(){}
es6写法:		()=>{}

常用的场景是，当使用了setTimeout或者setInterval的时候。
当使用箭头函数了，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
setTimeout里面的this，原本指向window，但是使用的箭头函数，就指向调用的这个对象。

三 template string 模板字符串 ${o}
let name = '小明'；
es5写法:  "你好，我叫"+name+",谢谢"
es6写法:  `你好，我叫${name}，谢谢`

四 解构赋值  
es6
let name = '小明';
let sex = '男';
let ifo = { name , sex };

es6反过来写
let info ={ name : '小明' , sex : 'sex' };
let { name , sex } = info;

五 default 函数参数的默认值
es6写法
formarte ( str , size = 3 , sime = ',' ) {

}

六 export & import 
用export把模块暴露出去
let port = '8080';
export {port}
用import引进来
import { port } from '/util';

按需引入:
export {host,port};
import {port} from '/util';

















