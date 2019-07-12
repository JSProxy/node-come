// es 5中的类继承

function Person(name,age){
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(this.name);
    }
}

Person.prototype.sex = '男';
Person.prototype.work = function (){
    console.log(this.name+'在工作')
}

// 对象冒充
function Web (name,age){
    Person.call(this,name,age)
    //不可以集成原型链上的方法
}
let w = new Web('zf','18');
w.run();

// 原型链集成 无法给父类传参
function Web2 (){
}
Web2.prototype = new Person(); //可以集成构造函数的属性方法 也可以集成原型链 但是不可以
let w2 = new Web2();


//原型链 加对象冒充的组合集成
// 对象冒充
function Web3 (name,age){
    Person.call(this,name,age)
    //不可以集成原型链上的方法
}
Web3.prototype = Person.prototype;
