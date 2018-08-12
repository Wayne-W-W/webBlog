### **1.Audio语法以及属性和方法**
```
<audio src="song.mp3" controls="controls" loop="loop" autoplay="autoplay">亲 您的浏览器不支持html5的audio标签</audio>
```
**控件参数说明**
- src 歌曲路径
- controls  播放控件
- loop 歌曲循环
- autoPlay 当歌曲加载后自动播放

**audio对象属性**
```
var audio = document.getElementById("audio");
```
- currentTime 获取当前播放时间
- duration 获取歌曲的总时间
- play 是否在播放 返回true/false
- pause 是否暂停 返回true/false

**audio对象方法**

- play() 播放歌曲
- pause() 暂停歌曲
- load() 重新加载歌曲

*上面列举是常用API,更多用法可查阅w3shool*

### Audio常用事件

- play 播放事件 可判断歌曲是否正在播放中
- pause暂停事件 判断歌曲是否暂停
- loadstart，durationchange，loadeddata，progress，canplay，canplaythrough。（这些事件在加载过程中是按以上顺序触发的），通过事件监听对其做相应处理

### 代码示例

```
/**
*js控制src、歌曲循环
*/
var audio = document.getElementById("audio");
audio.src="";
audio.loop= true;//歌曲循环
/**
*点击播放、暂停
*/
audio.play();//播放
audio.pause();//暂停
/**
*播放时间
*/
function timeChange(time, timePlace) {//默认获取的时间是时间戳改成我们常见的时间格式
    var timePlace = document.getElementById(timePlace);
    //分钟
    var minute = time / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //秒
    var second = time % 60;
    seconds = parseInt(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var allTime = "" + minutes + "" + ":" + "" + seconds + ""
    timePlace.innerHTML = allTime;
}

```
**播放监听事件**
```
/**
*监听加载完毕
*/
audio.addEventListener("loadeddata",function(){}, false);
/**
*监听播放
*/
audio.addEventListener("play",function(){}, false);
/**
*监听暂停
*/
audio.addEventListener("pause",function(){}, false);
```

**进度条及拖动效果**
[文章点击](https://www.cnblogs.com/leinov/p/3896772.html)
