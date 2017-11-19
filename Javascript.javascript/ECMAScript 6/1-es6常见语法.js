
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
自动解析数组或者对象中的值
解构赋值分类：
数组解构赋值，对象解构赋值，字符串，布尔值，函数参数，数值
es6
let name = '小明';
let sex = '男';
let ifo = { name , sex };

es6反过来写
let info ={ name : '小明' , sex : 'sex' };
let { name , sex } = info;

适用于变量交换
{
	let a = 1;
	let b = 2;
	[ a , b ] = [ b , a];
}
处理json常用场景
{
	let metaData = {
		title : 'adc',
		test : [{
			title:'test',
			desc:'description'
		}]
	};
	let { title : esTitle ,test : [title:cnTitle] } =metaData;
	console.log(esTitle,cnTitle )
}

五 default 函数参数的默认值
es6写法
formarte ( str , size = 3 , sime = ',' ) {

}

六 参数默认值,不定参数,拓展参数
1.默认参数
运用ES6的默认参数
function sayHello(name = 'xiaoming '){
	console.log(`hello ${name}`)
}
sayHello();//hello xiaoming 
sayHello('xiaoli');//hello xiaoli
2.不定参数
在函数中使用命名参数同时接收不定数量的未命名参数。在以前的js中通过arguments变量来达到这个目的。
不定参数的格式是三个句号后跟代表所有不定参数的变量名。
//将所有参数相加的函数
function add(...x){
	return x.reduce( (x,y) => x+y);
}
//传递任意个数的参数
console.log(add(1,2,3));//6
console.log(add(1,2,3,4,5));//15
3.拓展参数
允许传递数组或者类数组直接作为函数的参数而不通过apply
var people=['Wayou','John','Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1,people2,people3){
	console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello Wayou,John,Sherlock 

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);//输出：Hello Wayou,John,Sherlock




七.set-map 数据结构
业务场景 数据去重 
不会做数据类型的转换 
let arr = [1,1,2,3,3,4];
let list = new Set(arr);
console.log(list) //[1,2,3,4]














