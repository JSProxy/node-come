"use strict";
// 定义变量 需要指定类型
var flag = true;
flag = false;
console.log(flag);
// let num:number = 123;
// num = '123';//这样就会报错
// 数组定义 的几种方式
//es6.
var Arr = ['1', '2', '3']; //es5
//1 指定number 数组  
var Arr1 = [11, 22, 33];
//2
var Arr2 = [11, 22, 33];
var Arrany = [1, '2', {}];
//元祖类型（tuple） 属于数组的一种  可以有不同类型的数据
//指定位子上的类型
var Arr3 = [111, '222'];
// 枚举类型
var tstype;
(function (tstype) {
    tstype[tstype["success"] = 1] = "success";
    tstype[tstype["error"] = 2] = "error";
})(tstype || (tstype = {}));
var color;
(function (color) {
    color[color["blue"] = 0] = "blue";
    color[color["red"] = 5] = "red";
    color[color["orange"] = 6] = "orange";
})(color || (color = {}));
;
//定义枚举
var s = tstype.success;
console.log(s); // 1
//如果枚举没有赋值  他的值就是下标
var c = color.blue;
console.log(c); // 0
var o = color.orange;
console.log(o); // 6
//任意类型
var test = '123';
test = 111;
console.log(test);
// undefined
var test1;
// console.log(test1);//定义未赋值就是undefined  这样会报错
var test2;
console.log(test2); //定义未赋值就是undefined  这样不会报错
var test3;
console.log(test3);
//空类型 null
var cf;
// cf = 11; //报错  不可赋值
var cf1;
//void 方法没有返回值
function run1() {
    console.log('void');
}
//有返回值
function getStatus() {
    return 123;
}
//never 重来不会出现的值 基本用不上
var a;
// a=123 //报错
a = (function () {
    throw new Error('错误');
})();
