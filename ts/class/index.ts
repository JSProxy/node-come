class Person {
  public name: string; //定义属性
  constructor(n: string) {
    this.name = n;
  }
  run(): void {
    console.log(this.name);
  }
  getName(): string {
    return this.name;
  }
  setName(n: string) {
    this.name = n;
  }
}
let p = new Person("zf");
p.run();

// 继承
class Web extends Person{
    constructor(name:string){
        super(name);
    }

    run():void{
        console.log('子类 的run');
    }
}

let w = new Web('zf');
w.run();

//类中的修饰符
class Ufo{
    public name:string; 
    static food:string;
    private age:number; //私有 外部子类无法反问
    protected sex:number; //外部无法反问 子类可以 保护类型
    constructor(name:string,age:number,sex:number){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    //静态方法
    static eat():void{
        // 静态方法无法调用 非静态属性
        Ufo.food = 'sssss';
        console.log('eat');
    }
}
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
abstract class Factory {
    constructor(){
    }
    abstract production():any;
}

class CpuFactory extends Factory{
    constructor(){
        super()
    }
    production():any{
        console.log('必须实现');
    }
}