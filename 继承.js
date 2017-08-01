/**
 * Created by Administrator on 2017/3/13.
 */
//三种继承方式，原型继承，构造函数继承，原型+构造函数继承

function A(name){
    this.name = name;
}
A.prototype.sayName = function(){
    console.log(this.name);
}
function B(age){
    this.age = age;
}

//原型继承
B.prototype = new  A('mbj');//被B的实例共享
var foo = new B(18);
foo.age;//18,age自有属性
foo.name;//mbj, = foo._proto_.name;
foo.sayName();//mbj, = foo._proto_._proto_.sayName();
foo.toString();  //"[object Object]",等价于foo.__proto__.__proto__.__proto__.toString();
//这种方法的缺点所有子类共享父类实例，如果某一个子类修改了父类，其他的子类在继承的时候，会造成意想不到的后果。
// 第二个缺点是在构造子类实例的时候，不能给父类传递参数。


//构造函数继承
function B(age, name){
    this.age = age;
    A.call(this, name);
}
var foo = new B('18', 'jack');
foo.name;//jack
foo.age;//18
foo.sayName();//undefined
//undefined,call方法将A的属性添加到B中但是在A中没有sayName所以访问不到。
//这种方法的缺点父类的prototype中的函数不能复用

//原型+构造函数继承
function B(age, name){
    this.age = age;
    A.call(this, name);
}
B.prototype = new A('jack');
var foo = new B('18', 'tom');
foo.name;//tom
foo.age;//18
foo.sayName();//tom
//这样就可以成功访问sayName函数，这个方法的缺点内存变的更大了。
