### Vscode快捷键
- 重开一行：光标在行尾的话，回车即可；不在行尾，cmd + enter 向下重开一行；shift + cmd + enter 则是在上一行重开一行
- 删除一行：光标没有选择内容时，cmd + x 剪切一行；shift + cmd + k 直接删除一行
- 移动一行：alt + ↑ 向上移动一行；alt + ↓ 向下移动一行
- 复制一行：shift + alt + ↓ 向下复制一行；shift + alt + ↑ 向上复制一行
### Async Await Funciont 
```
async function filter(){
    try(){
        let data = await getUsersList()
    }catch{
            
    }
}
```

### 生成器

###### 1.迭代器
```
function makeIterator (arr) {
    let nextIndex = 0;
    //返回一个迭代器
    return {
        next:() => {
            //next()方法返回的结果对象
            if(nextIndex < arr.length) {
                return { value: arr[nextIndex++], done: false}
            }else{
                return {done: true}
            }
        }
    }
}
const it = makeIterator(['吃饭','睡觉','打豆豆'])

console.log('首先',it.next().value)  //吃饭
console.log('首先',it.next().value)  //睡觉
console.log('首先',it.next().value)  //打豆豆
console.log('首先',it.next().done)   //true
```
> return返回一个next方法

######  2.生成器:生成一个返回迭代器的函数，本质上操作迭代器，实际是借助生成器函数进行操作。
```
function *makeIterator (arr) {
    for (let i = 0; i < arr.length; i++){
        yield arr[i] 
    }
}
const gen = makeIterator(['吃饭','睡觉','打豆豆']);
console.log('首先',gen.next().value)//吃饭
console.log('首先',gen.next().value)//睡觉
console.log('首先',gen.next().value)//打豆豆
console.log('首先',gen.next().done)//true
```
> 生成器的出现简化了创建生成器这个繁琐的过程，更方便我们使用迭代器。

### co

```
const co = require('co');
const fetch = require('node-fetch');
co(function *() {
    const res = yield fetch ('https://api.douban.com/v2/movie/1291843');
    const movie = yield res.json();
    const summary = movie.summary
    console.log(summary)
}
```
> 将传入generator function转为promise;yield只能用于对象、数组、promise(包括generator),不能yield字符串、数组。