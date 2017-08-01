//foreach从头遍历到尾,为每个元素调用指定的函数
//foreach使用三个参数调用该函数,数组元素、元素索引、数组本身
var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function(value){ sum += value});
sum;//15
data.forEach(function(v, i, a){ a[i] = v + 1});
sum;//[2, 3, 4, 5, 6]


//map()函数调用数组中每一个值传递给指定的函数,并返回一个数组
var a = [1, 2, 3];
b = a.map(function(x){ return x*x });//[1, 4, 9]


//every()和some()都是数组的逻辑判断,对数组元素应用指定函数进行判断,返回true或false
//every()当且仅当数组中所有元素调用指定函数都返回true,才返回true
a = [1, 2, 3, 4, 5];
a.every(function(x){ return x%2 === 0;});//false;不是所有值都是偶数
//some()数组中存在一个元素调用函数返回true,那么返回true
a.some(function(x){ return x%2 === 0;});//true;包含偶数


//reduce()和reduceRight()按指定的函数将数组元素组合,并返回单个值
var sum = a.reduce(function(x,y){ return x+y;}, 0);//数组和,初始值为0
var s = a.reduce(function(x,y){ return x*y;}, 1);//数组积,初始值1
var max = a.reduce(function(x, y){ return (x>y)?x:y;})//数组最大值


//indexOf()和lastIndexOf()搜索整个数组中给定的元素,返回索引值,没有则返回-1
a = [0, 1, 2, 1, 0];
a.indexOf(1);//返回1
a.lastIndexOf(1)//返回3
a.indexOf(3);//返回-1



