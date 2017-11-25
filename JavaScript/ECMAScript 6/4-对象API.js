对象API

1.assign     用于对象的合并，复制到目标对象。

var name={name:'小明'},sex={sex:'男'},city={'city':'山东'}
Object.assign(name,sex,city)//{name: "小明", sex: "男", city: "山东"}

var info1={name:'守',sex:'男'},info2={name:'候',city:'山东'}
Object.assign(info1,info2)//{name: "候", sex: "男", city: "山东"}


克隆原来这样对象，这样克隆对象，修改了info1或者info3，不会影响info3或者info1，但是Object.assign并不是深拷贝。
var info1={name:'小',sex:'男'}
var info3=Object.assign(info1,{})//{name:'小',sex:'男'}

2.keys 	根据对象自身可遍历的键名进行遍历，返回一个数组
var info={name: "小明", sex: "男", city: "山东"}
Object.keys(info)//["name", "sex", "city"]

3.values		根据对象自身可遍历的键值进行遍历，返回一个数组
var info={name: "小明", sex: "男", city: "山东"}
Object.values(info)//["小明", "男", "山东"]

4.entries		根据对象自身可遍历的键值对进行遍历，返回一个数组
Object.entries(info)//[["name", "小明"],["sex", "男"],["city", "山东"]]