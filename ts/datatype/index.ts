// 定义变量 需要指定类型
let flag:boolean = true;
flag = false;
console.log(flag);

// let num:number = 123;
// num = '123';//这样就会报错

// 数组定义 的几种方式
//es6.
let Arr = ['1','2','3'];//es5
//1 指定number 数组  
let Arr1:number[] = [11,22,33];
//2
var Arr2:Array<number> = [11,22,33];
var Arrany:Array<any> = [1,'2',{}];

//元祖类型（tuple） 属于数组的一种  可以有不同类型的数据
//指定位子上的类型
let Arr3:[number,string] =[111,'222']; 


// 枚举类型
enum tstype {
    success=1,
    error=2
}
enum color {blue,red=5,'orange'};
//定义枚举
let s:tstype= tstype.success;
console.log(s) // 1
//如果枚举没有赋值  他的值就是下标
let c:color = color.blue;
console.log(c) // 0
let o:color = color.orange;
console.log(o) // 6

//任意类型
var test:any = '123'
test = 111;
console.log(test);

// undefined
var test1:number;
// console.log(test1);//定义未赋值就是undefined  这样会报错
var test2:undefined;
console.log(test2);//定义未赋值就是undefined  这样不会报错
var test3:number | undefined;
console.log(test3);
//空类型 null
var cf:null;
// cf = 11; //报错  不可赋值
var cf1:number | null |undefined;

//void 方法没有返回值
function run1():void{
    console.log('void')
}
//有返回值
function getStatus():number{
    return 123;
}

//never 重来不会出现的值 基本用不上
var a:never;
// a=123 //报错

a =(()=>{
    throw new Error('错误')
})()