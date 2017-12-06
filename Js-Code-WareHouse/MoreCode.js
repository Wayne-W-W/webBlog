
Random
1.randomColor
/**
 * @desc 随机生成颜色
 * @return {String}
 */
function randomColor(){
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

2.randomNum
/**
 * 
 * @desc 生成指定范围随机数
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function randomNum(min,max) {
    return Math.floor(min + Math.random() * (max - min));
}

Support
1.isSupportWebP
/**
 * 
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean} 
 */
function isSupportWebP() {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}


