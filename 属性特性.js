/**
 * Created by Administrator on 2017/3/12.
 */
//数据属性有4个特性value、writable、enmuerable、configurable
Object.defineProperties(person,{
    title:{value:'f',enmuerable:true},
    crop:{value:'ss',enumerable:true},
    salary:{value:4000,enmuerable:true,writable:true},
    luck:{
        get function(){
            return Math.random()>0.5?'good luck':'bad luck';
        }
    },
    promote:{
        set:function(level){
            this.salary *= 1 + level*0.1;
        }

    }
})

Object.getOwnPropertyDescriptor(person,'salary');
//Object{value:4000,writable:true,enumerable:true,configurabel:false}

person.salary;//4000
