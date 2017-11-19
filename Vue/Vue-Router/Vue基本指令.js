Vue指令

v-text   读取文本不能读取html标签，解析文本
	使用{{XXX}}这种情况是有弊端的，当我们网速很慢或者javascrit出错时，会暴露我们的{{XXX}}。v-text就是解决这个问题的。
v-html  能读取html标签，解析html标签
	双大括号会将数据解释为纯文本，而非HTML。为了输出真正的HTML，你就需要使用v-html 指令。
要注意的是：在正式环境上动态渲染HTML是很危险的，因为容易导致XSS攻击。

v-if   显示与隐藏     和v-show对比的区别 就是是否删除dom节点   默认值为false
v-else-if  必须和v-if连用
v-else  必须和v-if连用  不能单独使用  否则报错   模板编译错误
	v-if用来判断是否加载html的DOM
v-show 
	css中display属性，DOM已经加载，只是css控制没有显示。
	v-if和v-show的区别：
		v-if:判断是否加载，可以减轻服务器的压力，在需要时加载
		v-show:调整css display属性，可以使客户端操作更加流畅
v-bind:class   
	三种绑定方法  
	1、对象型  '{red:isred}'  
	2、三目型   'isred?"red":"blue"'   
	3、数组型  '[{red:"isred"},{blue:"isblue"}]'
v-on	 事件监听器
	键盘回车事件v-on:keyup.enter
	
v-model 绑定数据源
	修饰符	.lazy:取代input监听change事件
			.number:输入字符串转为数字
			.trim:输入去掉首尾空格
v-bind  处理HTML中的标签属性
	完整语法：v-bind：href=
	缩写语法：：hred=
	修改CSS样式    绑定class样式（：class）；绑定style（：style）

v-cloak 防闪烁
	在vue渲染完指定的DOM后才进行显示，必须和css样式一起使用
v-pre  把标签内部的元素原位输出
	在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。
	<div v-pre>{{message}}</div>
	这时并不会输出我们的message值，而是直接在网页中显示{{message}}
v-once  进入页面时  只渲染一次 不在进行渲染
	举例：1.<div v-once>{{msg}}</div>
		   2.@click.once="show"

文本框的数字会默认转变成字符串，所以需要parseInt()函数进行整数转换。
