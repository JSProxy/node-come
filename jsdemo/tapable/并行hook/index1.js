// 同步并行的钩子 类promise.all  等待所有事件执行完  再执行
class AsyncParrallelHook {
    constructor(...args) {
        this.tasks = [];
    }
    tapAsync(name, cb) {
        this.tasks.push(cb);
    }
    callAsync(...args) {
        let finalCallback = args.pop();
        let taskInde = 0;
        let done = () => {
            taskInde++;
            if (taskInde == this.tasks.length) {
                finalCallback();
            }
        }
        this.tasks.forEach((task) => {
            task(...args, done);
        })

    }
}
let hook = new AsyncParrallelHook(['name']);
hook.tapAsync('vue', (name, cb) => {


    setTimeout(() => {
        console.log(name + '我在学习 vue');
        cb();
    }, 1000);
    
})
hook.tapAsync('react', (name, cb) => {
    setTimeout(() => {
        console.log(name + '我在学习 react');
        cb();
    }, 2000);
    
})
hook.callAsync('zf', () => {
    console.log('zf把vue react 都学习完成了')
})

// bail//保险