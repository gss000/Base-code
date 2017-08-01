/**
 * Created by Administrator on 2017/3/12.
 */
var man = {
    weibo:'@bosn',
    $age:null,
    get age(){
        if(this.$age == undefined){
            return new Date().getFullYear() - 1998;
        }else{
            return this.$age;
        }
    },
    set age(val){
        val = +val;//使用一元操作符+把传入的参数val变成（转换）数字
        if(!isNaN(val)&&val>0&&val<150){
            this.$age = +val;
        }else{
            throw  new Error('Incorrect val =' + val);
        }
    }
}

console.log(man.age);//17
man.age = 100;
console.log(man.age);//100
man.age = 'abc';//error:Incorrect val = NaN
