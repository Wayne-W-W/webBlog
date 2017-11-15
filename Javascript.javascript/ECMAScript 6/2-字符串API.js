字符串API

repeat方法返回一个新的字符串，表示将原字符串重复n次
'小明'.repeat(3) //'小明小明小明'

includes & startsWith & endsWith

includes：是否找到了参数字符串,返回布尔值。
startsWith：参数字符串是否在原字符串的头部,返回布尔值。
endsWith：参数字符串是否在原字符串的尾部,返回布尔值。
三个方法都接受两个参数，第一个参数是参数字符串，第二个是开始检索的位置

var str='我就是守候'
str.startsWith('我就是')//true
str.startsWith('我')//true
str.startsWith('我',2)//false
str.startsWith('守候')//false
str.endsWith('守候')//true
str.includes('守候')//true
str.includes('我',3)//false

padStart & padEnd

padStart:如果字符串不够指定长度，在头部补全指定字符
padEnd：如果字符串不够指定长度，在尾部补全指定字符
两个方法都接收两个参数，第一个是指定字符串的最小长度，第二个用来补全的字符串。
var str='守候'
str.padEnd(10,'123')//"守候12312312"
str.padStart(10,'123')//"12312312守候"
str.padEnd(10)//"守候        "
str.padStart(10)//"        守候"
str.padStart(1)//"守候"
str.padEnd(1)//"守候"
