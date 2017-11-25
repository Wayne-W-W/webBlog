数组API

1.from 用于将两类对象转为真的的数组：类似数组的对象和可遍历的对象

Array.from('守候')//["守", "候"]

将DOM集合和arguments转正真正的数组
//DOM对象
let oLi = document.querySelectorAll('li');
Array.from(oLi ).forEach(function (item) {
  console.log(item);
});

// arguments对象
function fn() {
  let args = Array.from(arguments);
}

2.find方法，找出第一个符合条件的数组成员。如果没有就返回underfind
//第一个大于2的成员
[1,2,3,4].find( (n) => n>2 ); //2

3.findIndex方法，用于找出第一个符合条件的数组成员的索引。
//第一个大于2的成员的索引
[1, 2, 3, 4].findIndex((n) => n > 2)//2

4.includes方法，用于某个数组是否包含给定的值，返回一个布尔值；没有返回 underfind
[1, 2, 3].includes(2)//true
[1, 2, 3].includes(5)//false
[1, 2, NaN].includes(NaN)//true

在ES5中常用的10种数组遍历方法:
1、原始的for循环语句
2、Array.prototype.forEach数组对象内置方法
3、Array.prototype.map数组对象内置方法
4、Array.prototype.filter数组对象内置方法
5、Array.prototype.reduce数组对象内置方法
6、Array.prototype.some数组对象内置方法
7、Array.prototype.every数组对象内置方法
8、Array.prototype.indexOf数组对象内置方法
9、Array.prototype.lastIndexOf数组对象内置方法
10、for...in循环语句

ES6中新增加了一种：
1.for...of循环语句

/**
 *  Array.of()
 *  @desc 责把一堆文本或者变量转换成数组,不仅可以转换数字，字符串也是可以转换的，看下边的代码：
 */
let arr =Array.of(3,4,5,6);
console.log(arr);

let arr =Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr);

/**
 * in的用法 
 * @desc 用来判断对象或者数据中是否存在某个值
 */
let arr=[,,,,,];
console.log(0 in arr); //false
 
let arr1=['jspang','技术胖'];
console.log(0 in arr1);  // true