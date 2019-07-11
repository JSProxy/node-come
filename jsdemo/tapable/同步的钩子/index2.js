class SyncBailHook {
//带保险的钩子
    constructor() {
        this.tasks = [];
    }
    tapSync(name, cb) {
        this.tasks.push(cb);
    }
    callSync(...args) {

        let ret, index = 0;
        do {
            ret = this.tasks[index++](...args);
        }
        while (ret === undefined && index < this.tasks.length)
    }
}

let hook = new SyncBailHook(['name']);
hook.tapSync('vue', (name, ) => {
    console.log(name + '我在学习 vue');
})
hook.tapSync('react', (name) => {
    console.log(name + '我在学习 react');
})
hook.callSync('zf')

// waterfall
// loop