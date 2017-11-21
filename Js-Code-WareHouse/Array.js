/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @return {Boolean}
 */
function arrayEqual(arr1,arr2){
    if( arr1 === arr2) return true;
    if( arr1.length != arr2.length) return false;
    for(var i = 0; i < arr1.length ; i++){
        if( arr1[i] !== arr2[i] ) return false;
    }
    return false;
}

Class
1.addClass
/**
 * 
 * @desc 为元素添加class
 * @param {HTMLElement ele}
 * @param {String} cls
 */
var hasClass = require('./hasClass');
function addClass (ele,cls) {
    if(!hasClass (ele, cls) ){
        ele.className += ''+cls;
    }
}
2.hasClass
/**
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */
function hasClass (ele,cls){
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}


3.removeClass
/**
 * @desc 为元素移除class
 * @param {HTMLElement} els
 * @param {String} cls
 */
var hasClass = require('./hasClass');
function removeClass (ele,cls){
    if(hasClass(ele,cls)){
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg,'');
    }
}

Cookie
1.getCookie
/**
 * @desc 根据name读取cookie
 * @param {String} name
 * @return {string}
 */
function getCookie (name){
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for(var i = 0; i < arr.length; i++){
        var temArr = arr[i].split('=');
        if(temArr[0] == name){
            return decodeURIComponent(temArr[1]);
        }
    }
    return '';
}
2.removeCookie
var setCookie = require('./setCookie');
/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}
3.setCookie
/**
 * @desc 设置cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookie(name,value,days){
    var date = new Date();
    data.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}