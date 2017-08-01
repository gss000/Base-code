//模拟原型的继承
function inherit(p){
    if(p == null) throw TypeError();//p是一个对象但是不能为null
    if(Object.create){
        return Object.create(p);
    }                               //如果Object.create存在，直接使用它
    var t = typeof p;
    if(t != "object" && t != "function") throw TypeError();//上面不存在，则下面继续检测
    function f(){};//定义一个空的构造函数
    f.prototype = p;//将其原型属性设置为p
    return new f();//使用f创建p的继承对象
}
