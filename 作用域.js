/**
 * Created by Administrator on 2017/3/15.
 */
//作用域定义这个变量的作用范围
//内部作用域由函数的形参，实参，局部变量，函数构成，内部作用域和外部的作用域一层层的链接起来形成作用域链。

//函数内申明的所有变量在函数体内是始终可见的。
//声明提前，在函数体内局部变量覆盖全局变量，只有执行到var的时这个局部变量才被赋值。
var scope = 'global';
function fn(){
    console.log(scope);//undefined
    var scope = 'local';
    console.log(scope);//local
}
