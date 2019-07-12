"use strict";
// 定义函数
function testvoid() {
    console.log('没有返回值');
}
//1. 函数声明法
function run() {
    return '1';
}
//2. 匿名函数
var func = function () {
    return 123;
};
//3 定义方法传参
// 加了 ？ 表示可传可不传
// 可选参数  必须配置到参数的最后面 不然会不执行 后面的参数
// 设置默认参数 es5 中不行
function getInfo(name, age) {
    if (name === void 0) { name = 'zf'; }
    return name + 'info' + age;
}
//4 数组参 ...
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
add(1, 2, 3, 5);
function getinfo(str) {
    if (typeof str === 'string') {
        return '我叫' + str;
    }
    else {
        return '我的年龄' + str;
    }
}
;
var jt = function (name) {
    if (name === void 0) { name = 'zf'; }
    console.log(name);
};
