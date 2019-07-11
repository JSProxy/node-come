class AsyncParrallelHook {

    constructor() {
        this.tasks = []
    }
    tapPromise(name, cb) {
        this.tasks.push(cb)
    }
    callPromise(...args) {
        let alltask = this.tasks.map((task) => {
            return task(...args);
        })
        return Promise.all(alltask);
    }
}

let hook = new AsyncParrallelHook(['name']);
hook.tapPromise('vue', (name) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name + '我在学习 vue');
            resolve()
        }, 1000);
    })
})
hook.tapPromise('react', (name) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name + '我在学习 react');
            resolve()
        }, 2000);
    })

})
hook.callPromise('zf').then(() => {
    console.log('zf把vue react 都学习完成了')
})