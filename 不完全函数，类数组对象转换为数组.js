
//实现一个工具函数类数组对象转换为真正的数组
function array(a, n){return Array.prototype.slice.call(a, n || 0);}

//这个函数的实参传递到左侧
function partialLeft(f/*,...*/){
    var args = arguments;//保存外部的实参数组
    return function(){
        var a = array(args, 1);//开始处理外部的第1个args
        a = a.concat(array(arguments));//然后增加所有的内部实参
        return f.apply(this, a);
    }
}

//这个函数的实参传递至右侧
function partialRight(f/*,...*/){
    var args = arguments;
    return function(){
        var a = array(arguments);//从内部参数开始
        a = a.concat(array(args, 1));//然后从外部第1个args开始添加
        return f.apply(this, a);
    }
}

//这个函数的参数被用作模板
//实参列表中的undefined值都被填充
function partial(f/*,...*/){
    var args = arguments;
    return function (){
        var a = array(args, 1);//从外部args开始
        var i = 0, j = 0;
        //遍历args，从内部实参填充undefined值
        for(; i< a.length; i++){
            if(a[i] === undefined ) a[i] = arguments[j++];
            a = a.concat(array(arguments, j));
            return f.apply(this, a);
        }
    }
}

var f = function(x, y, z){
    return x*(y-z);
}
partialLeft(f, 2)(3, 4);//-2:绑定的第一个实参：2*(3-4)
partialRight(f, 2)(3, 4);//6:绑定最后一个实参：3*（4-2）
partial(f, undefined, 2)(3, 4);//-6：绑定中间的实参：3*（2-4）；