// 对属性函数 类 进行行为规范
// 接口
// 属性接口 对json 的约束

// 这里不是接口的实现 
function printLabel(labelInfo:{label:string}):void{
    console.log('aaa');
}
printLabel({label:'aaa'}); //必须传入 label

//属性约束
//顺序可以不一样  内容一定要一样
interface FullName{
    age?:number;
    firstName:string;
    secondName:string;
}
var obj ={
    age:20,
    firstName:'zf',
    secondName:'fz'
}
// 对多个方法进行约束
function printName(name:FullName):void{
    console.log(name.firstName,name.secondName);
}
function printInfo(info:FullName):void{
    console.log(info.firstName,info.secondName);
}
printName(obj);

// 函数类型接口 对方法 参数 和返回值进行约束
interface encrypt {
    (key:string,value:string):string;
}
var md5:encrypt = function(key:string,value:string):string{
    return key+value;
}

// 可索引接口  对数组 和 对象的约束
//这个是数组的声明
var arr:number[] =[1,2,3]//必须为number
interface ArrFace{
[index:number]:string //索引为number 值为 string
}
var arr1:ArrFace =['3','2','2'];

interface ObjFace{
    [index:string]:string
}
var tobj:ObjFace = {
    'aa':'aa'
}

//  对类的约束 类类型接口
// 属性 和方法 都进行约束
interface Animal {
    name:string;
    eat(food:string):void;
}
class Bird implements Animal{
    name:string;
    constructor(name:string){
        this.name =name;
    }
    eat(){
        console.log('吃东西 了');
    }
}

class Pig implements Animal{
    name:string;
    constructor(name:string){
        this.name =name;
    }
    eat(food:string){
        console.log('吃东西 了'+food);
    }
}

// 接口扩展  接口可以集成

interface Animal2 {
    eat():void;
}
interface Person2 extends Animal2{

    work():void;
}

class Webbb implements Person2{
    public name:string;

    constructor(name:string){
        this.name = name;
    }
    eat(){
    }
    work(){
    }
}

class Programmer {
    public name:string;
    constructor(name:string){
        this.name=name
    }
    conding(code:string){
        console.log(code);
    }
}
// 继承后 在接口约束
class webw extends Programmer implements Person2{
    constructor(name:string){
       super(name)
    }
    eat(){
    }
    work(){
    }
}