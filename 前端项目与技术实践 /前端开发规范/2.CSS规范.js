css规范
// 书写CSS样式不能用id选择器，因为id选择器很难复用；
// 如果属性值为0，不需要为0加单位；
// 先写元素的布局属性position、display、float、overflow等，再写元素的内容属性color、font、text-align等
// 多种浏览器兼容，先写私有属性、后写标准属性
.ui-news {
    -webkit-box-shadow: 1px 1px 5px;
    -moz-box-shadow: 1px 1px 5px;
    -ms-box-shadow: 1px 1px 5px;
    -o-box-shadow: 1px 1px 5px;
    box-shadow: 1px 1px 5px;
}