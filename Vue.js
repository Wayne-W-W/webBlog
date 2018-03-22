Vue传递参数大全

1.通过name传递参数
在路由配置文件写 设置name属性
routes:[
	{ path : '/' , name : 'Hello' , component : Hello}
];
在.vue模板里用$router.name的形式接受 : <p>{{ $route.name}}</p>

2.过<router-link> 标签中的to传参
<router-link>标签中的to属性进行传参，需要对to进行一个绑定，用:to。
格式 
<router-link :to="{ name:xxx , params : { key : value } }" ></router-link>
用法 
<router-link :to="{name:'hi1',params:{username:'jspang'}}">Hi页面1</router-link>
页面接受
{{$route.params.username}}

3.单页面多路由区域操作
<router-view ></router-view>
<router-view name="left"></router-view>
<router-view name="right"></router-view>
路由配置：
export default new Router({
	routes: [
		{path: '/',     components: { default:Hello,   left:Hi1,    right:Hi2  }},
		{path: '/Hi',  components: {default:Hello,    left:Hi2,   right:Hi1   }}
	]
})

4.vue-router利用url传递参数
：冒号的形式传递参数
配置路由：
{   path:'/params/:newsId/:newsTitle' , component:Params  }
.vue组件中
用法：
	<router-link to="/params/198/jspang website is very good">params</router-link>
取值：
	<p>新闻ID：{{ $route.params.newsId}}</p>
    <p>新闻标题：{{ $route.params.newsTitle}}</p>
正则表达式在URL传值用法：
要求传递参数ID只能是数字的形式，传值时有个基本类型判断
用法：path:'/params/:newsId(\\d+)/:newsTitle'

5.redirect基本重定向
{ path:'/goback' , redirect:'/' }
重定向时传递参数
{ path:'/goParams/:newsId(\\d+)/:newsTitle' , redirect:'/params/:newsId(\\d+)/:newsTitle' }

6.alias别名的使用
路由配置： {    path: '/hi1',    component: Hi1,    alias:'/jspang' }
用法：<router-link to="/jspang">jspang</router-link>
注意：
别名请不要用在path为’/’中，如下代码的别名是不起作用的。
{  path: '/',  component: Hello,  alias:'/home'}


7.路由中的钩子
（1）路由配置文件中的钩子函数，只能写一个beforeEnter
{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
三个参数：
1. to:路由将要跳转的路径信息，信息是包含在对像里边的。
2. from:路径跳转前的路径信息，也是一个对象的形式。
3. next:路由的控制参数，常用的有next(true)和next(false)。

（2）在模板中的钩子函数
	beforeRouteEnter：在路由进入前的钩子函数。
	beforeRouteLeave：在路由离开前的钩子函数。















