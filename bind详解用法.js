//bind和call和apply:改变函数体内this的指向
//将方法从对象中拿出来，然后调用，假如不走特殊处理，那么会丢失原来的对象。使用bind就可以解决。
this.bar = 2;
var foo ={
    bar: 1,
    funWrite: function(){
        var that = this;
        console.log(that.bar);//1
    }
}
foo.funWrite();//1 this->foo

var foo1 = foo.funWrite;
foo1();//2 this->window

var boundfun = foo1.bind(foo);// 将对象绑定到方法上
boundfun();//2

//偏函数,预设定参数，调用的时候传入其他参数即可
function list(){
    return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3);
console.log(list1);// 1, 2, 3

var locklist = list.bind(undefined, 12);//预定义参数12
var list2 = locklist();
console.log(list2);//[12]

var list3 = locklist(1, 2, 3);
console.log(list3);//[12, 1, 2, 3]

//和setTimeout  setInterval一起使用
//一把情况下，setTimeout的this指向window或global对象
function a(){
    this.count = Math.ceil(Math.random()*10) + 1;
}
a.prototype.declare = function(){
    console.log(this.count);
}
a.prototype.bloom = function(){
    window.setTimeout(this.declare.bind(this), 1000);
    //调用函数declare，将对象绑定到方法上。那么this.declare指向对象
}

//绑定函数作为构造函数
function Point(x, y){
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function(){
    console.log(this.x + ',' + this.y);
}
var p = new Point(1, 2);
p.toString();//1,2
var YaPoint = Point.bind(null, 10);
var XaPoint = new YaPoint(5);
XaPoint.toString();//10， 5；
console.log(XaPoint instanceof Point);//true
console.log(XaPoint instanceof YaPoint)//true
console.log(new Point(12, 21) instanceof YaPoint)//true

