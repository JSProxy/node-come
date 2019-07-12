"use strict";
// 对属性函数 类 进行行为规范
// 接口
// 属性接口 对json 的约束
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 这里不是接口的实现 
function printLabel(labelInfo) {
    console.log('aaa');
}
printLabel({ label: 'aaa' }); //必须传入 label
var obj = {
    age: 20,
    firstName: 'zf',
    secondName: 'fz'
};
// 对多个方法进行约束
function printName(name) {
    console.log(name.firstName, name.secondName);
}
function printInfo(info) {
    console.log(info.firstName, info.secondName);
}
printName(obj);
var md5 = function (key, value) {
    return key + value;
};
// 可索引接口  对数组 和 对象的约束
//这个是数组的声明
var arr = [1, 2, 3]; //必须为number
var arr1 = ['3', '2', '2'];
var tobj = {
    'aa': 'aa'
};
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.eat = function () {
        console.log('吃东西 了');
    };
    return Bird;
}());
var Pig = /** @class */ (function () {
    function Pig(name) {
        this.name = name;
    }
    Pig.prototype.eat = function (food) {
        console.log('吃东西 了' + food);
    };
    return Pig;
}());
var Webbb = /** @class */ (function () {
    function Webbb(name) {
        this.name = name;
    }
    Webbb.prototype.eat = function () {
    };
    Webbb.prototype.work = function () {
    };
    return Webbb;
}());
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.conding = function (code) {
        console.log(code);
    };
    return Programmer;
}());
// 继承后 在接口约束
var webw = /** @class */ (function (_super) {
    __extends(webw, _super);
    function webw(name) {
        return _super.call(this, name) || this;
    }
    webw.prototype.eat = function () {
    };
    webw.prototype.work = function () {
    };
    return webw;
}(Programmer));
