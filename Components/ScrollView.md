### ScrollView 滚动组件
##### 基于better-scroll

#### 用法
```html
<comp-scroll @scroll="listenScroll" @scrollToEnd="listenScrollToEnd" listenScroll listenScrollBottom>
  <div class="content">
  .....
  </div>
</comp-scroll>
```
```js
import ScrollView from '@/components/common/ScrollView'
methods: {
  listenScroll(val) {
    console.log('滚动')
  },
  listenScrollToEnd(val) {
    console.log('滚动到底')
  },
  },
components: {
  "comp-scroll": ScrollView
}
```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| probeType | 见说明① | Number | 1/2/3 | 1 |
| listenScroll | 设置监听滚动事件 | Boolean | true/false | false |
| listenScrollBottom | 设置监听滚动底部事件 | Boolean | true/false | false |

**说明**
① probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| scroll | 设置参数listenScroll为true可以监听到滚动事件 | pos |
| scrollToEnd | 设置参数listenScrollBottom为true可以监听到滚动到底部事件 | 无 |



