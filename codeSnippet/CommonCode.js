去除前后、前、后 所有空格

var strr="    1 ad dertasdf sdfASDFDF DFG SDFG    "
//  type 1-所有空格，2-前后空格，3-前空格，4-后空格
function trim(str,type){
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
}
console.log( trim(strr,1))      //  "1addertasdfsdfASDFDFDFGSDFG"

查找字符串的A内容替换成B内容
let str="abacdasdfsd"
function replaceAll(str,AFindText,ARepText){
   raRegExp = new RegExp(AFindText,"g");
   return str.replace(raRegExp,ARepText);
}
console.log(replaceAll(str,"a","x"))   // xbxcdxsdfsd
str：需要编辑的字符串本身
AFindText:需要替换的内容
ARepText:被替换成的内容