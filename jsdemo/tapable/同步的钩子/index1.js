class SyncHook{

    constructor (){
        this.tasks = [];
    }
    tapSync(name,cb){
        this.tasks.push(cb);
    }
    callSync(...args){

        this.tasks.forEach((task)=>{
            task(...args);
        })

    }
}

let hook = new SyncHook(['name']);
hook.tapSync('vue', (name,) => {
        console.log(name + '我在学习 vue');
})
hook.tapSync('react', (name) => {
        console.log(name + '我在学习 react');
})
hook.callSync('zf')