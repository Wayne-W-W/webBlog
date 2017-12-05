
head内容
// head中必须定义title、keyword、description，保证基本的SEO页面关键字和内容描述。
// 移动端页面head要添加viewport控制页面不缩放，有利于提高页面渲染性能。
// 建议在页面<head>加上基本的社交RICH化消息，保证网页地址分享后能够显示缩放图、图标和描述等。
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<meta itemprop="name" content="页面标题">
<meta name="description" itemprop="description" content="页面内容描述">
<meta itemprop="image" content="http://xxx.com/logo.png">

img的alt属性
 {/* 为<img>元素上加alt属性，用利于页面搜索引擎优化，对于盲人用户和图像加载失败的提示很实用（支持无障碍阅读） */}
<img src="banner.jpg" alt="宣传图片">

label的for属性
{/* label的for属性或者将对应控件放在label标签内部，这样在点击label时，同时会关联到对应的input或textarea上选中，增加了输入的响应区域。 */}
<label for="blue">蓝色</label><input type="radio" id="blue" name="color" value="#00f">
<label><input type="radio" name="color" value="#f00">红色</label>