
条件判断
//不要直接使用undefined进行变量判断。
// 不推荐
if(name == undefined) {return false;}
// 推荐
if(typeof person === 'undefined') {return false;}



数组拷贝
let ary = [1, {a: 2}];
let ary2 = [...ary];
let ary3 = {};
Object.assign(ary3, ary);
ary[1].a = 3;
ary2[1].a; // 3
ary3[1].a; // 3
//注意：都是浅拷贝！！



数组遍历使用for…of，对象遍历使用for…in
let ary = ['a', 'b', 'c'];
let obj = { a: 1, b: 2};
for(let item of ary) {
  console.log(item);
}
for(let key in obj) {
  console.log(`${key}, ${obj[key]}`)
}



前端防御性编程规范
// 防御性编程是指通过检测任何可能存在的逻辑异常问题的代码实现，提高脚本执行过程健壮性的一种编程手段。
// 不推荐
t = data.userInfo.name;
// 推荐
t = data && data.userInfo && data.userInfo.name || 'ligang';
// 通过&&或者||进行检测，这也是函数式编程所提倡的！



!!强制转布尔值Boolean
//假值有：0 、 '' 、 null 、 undefined  、  false  、NaN 。
//除了这6个外，其他均为'真'，包括对象、数组、正则、函数等。注意:'0'、'null'、'false'、{}、[]也是真值、
var x = null;var y = "";var str = 'abcd';
console.log(!!x)      // false;
console.log(!!y)      // false;
console.log(!!str)    // true;


在str前添加一个+号，+str会强制转Number
var str="88";
console.log(+str)   // 88
//但是如果是混合类型的字符串，则会转为NaN
var b="1606e";
console.log(+b)     // NaN











