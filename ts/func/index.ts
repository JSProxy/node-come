// 定义函数
function testvoid():void{
    console.log('没有返回值');
}
//1. 函数声明法
function run ():string{
    return '1'
}
//2. 匿名函数
var func = function():number{
    return 123;
}
//3 定义方法传参
// 加了 ？ 表示可传可不传
// 可选参数  必须配置到参数的最后面 不然会不执行 后面的参数
// 设置默认参数 es5 中不行
function getInfo(name:string = 'zf',age?:number):string{
    return name+'info'+age;
}
//4 数组参 ...
function add(...args:number[]):number{

    var sum:number = 0;
   
    for(let i =0;i<args.length; i++){

        sum += args[i]
    }
    return sum;
}
add(1,2,3,5);

// ts  函数重载  函数一样 参数不一样 
// es5 中方法会被覆盖
function getinfo(name:string):string;
function getinfo(age:number):number;
function getinfo(str:any):any{
    if(typeof str ==='string'){
        return '我叫'+str;
    }else{
        return '我的年龄'+str;
    }
};

const jt = (name:string='zf'):void=>{
    console.log(name);
}