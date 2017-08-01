/**
 * Created by Administrator on 2017/3/13.
 */
//简单理解，一个函数可以访问外部函数的变量


function a(x){
    var tem = 3;
    function b(y){
        console.log(x+y+tem);
    }
}
//a函数中的b函数就是闭包，b函数可以使用a的局部变量，参数。

function a(x){
    var num = 3;
    function b(y){
        console.log(x+y+num);
    }
    return b;
}
//将函数b作为返回值

for(var i=0; i<2; i++){
    setTimeout(function(){
        console.log(i);//输出结果2 而不是0,1
    },0);
}
//上面没有隔离作用域
for(var i=0; i<2; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);//输出0,1
        },0);
    })(i);
}
//立即执行函数创建了一个作用域，隔离外界的作用域
//闭包的缺点：内部函数可以访问外部函数的变量，所以外部函数的变量不能被释放，如果嵌套过多就会占用高内存

