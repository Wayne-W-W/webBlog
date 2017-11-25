ES6中添加了对类的支持,引入了class关键字;

//定义类
class JavaObject {
    //ES6中新的构造器
    constructor(name){
        this.name = name ; 
    }
    //实例方法
    sayName(){
        console.log('my name is ' + this.name);
    }
}
//类的继承
class JavaFun extends JavaObject {
    constructor(name){
        //直接调用夫类构造器初始化
        super(name);
    }
    program(){
        console.log('Im Xiaoming');
    }
}
//输出
var javaCode = new JavaObject('dummy');
var javaFunCode = new JavaFun('wayou');
javaCode.sayName();//'my name is dummy'
javaFunCode.sayName();//'my name is wayou'
javaFunCode.program();//'Im Xiaoming'


增强的对象字面量
1)可以在对象字面量里定义原型
2)定义方法可以不用function关键字
3)直接调用父类方法
//通过对象字面量创建对象
var myCode ={
    breathe(){
        console.log('breathe...')
    }
}
var wokerCode = {
    __proto__: myCode, //设置此对象的原型为myCode,相当于继承myCode
    company:'freeWoker',
    work(){
        console.log('work...')
    }
}
myCode.breathe();//'breathe...
//调用继承来的breathe方法
wokerCode.breathe();//'breathe...
