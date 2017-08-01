/**
 * Created by Administrator on 2017/3/13.
 */

//(function(){})()立即执行函数的写法，包括jQuery中
//函数表达式 var fnName = function(){…};
// 使用function关键字声明一个函数，但未给函数命名，最后将匿名函数赋予一个变量，叫函数表达式

fnName();
function fnName(){};
//函数声明提升，函数调用可以在函数申明之前

fnname();
var fnname = function(){};
//错误，变量fnname还没有保存函数的引用，函数调用需在函数表达式之后

var fna = function(){
    console.log('a');
}();//函数表达式之后加括号立即调用函数

function fnb(){
    console.log('a');
}();//不会报错但是函数声明之后不会被调用

function(){
    console.log('1');
}();//语法错误，匿名函数属于函数表达式但为进行赋值
//(function(){})()和(function(){}())两种写法
//在函数体后面加()立即执行，那么这个函数必须是函数表达式

//JavaScript中没有私有作用域，所以全局变量可能会被其他同名变量覆盖
//可以将匿名函数作为一个容器，使得容器内部可以访问外部变量但外部无法访问内部变量
//所以(function(){})()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”