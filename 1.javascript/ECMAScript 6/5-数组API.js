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