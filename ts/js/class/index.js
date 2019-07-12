"use strict";
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
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (n) {
        this.name = n;
    };
    return Person;
}());
var p = new Person("zf");
p.run();
// 继承
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.run = function () {
        console.log('子类 的run');
    };
    return Web;
}(Person));
var w = new Web('zf');
w.run();
//类中的修饰符
var Ufo = /** @class */ (function () {
    function Ufo(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    //静态方法
    Ufo.eat = function () {
        // 静态方法无法调用 非静态属性
        Ufo.food = 'sssss';
        console.log('eat');
    };
    return Ufo;
}());
Ufo.eat();
//多态  父类定义 不实现 子类有不同的表现
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat():void{
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat():void{
//         console.log('我要吃骨头')
//     }
// }
// 抽象类 他是提供给其他类集成的基类 不能直接实例化
// abstract 用该关键字定义抽象类和抽象方法  
// 抽象类中的方法不包含具体实现  ----必须在派生类中实现----
// 主要用来 定义标准
var Factory = /** @class */ (function () {
    function Factory() {
    }
    return Factory;
}());
var CpuFactory = /** @class */ (function (_super) {
    __extends(CpuFactory, _super);
    function CpuFactory() {
        return _super.call(this) || this;
    }
    CpuFactory.prototype.production = function () {
        console.log('必须实现');
    };
    return CpuFactory;
}(Factory));
