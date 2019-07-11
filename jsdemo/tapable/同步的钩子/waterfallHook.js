class SyncWaterfallHook{

    constructor(){
        this.tasks = []
    }

    tapSync(name,cb){
        this.tasks.push(cb);
    }
    callSync(...args){

        let [first,...other] = this.tasks;
        let start = first(...args);

        other.reduce((pre,next)=>{
            next(pre);
        })(start)
    }
}


let hook = new SyncWaterfallHook(['name']);
hook.tapSync('vue', (name) => {
    console.log(name + '我在学习 vue');
})
hook.tapSync('react', (name) => {
    console.log(name + '我在学习 react');
})
hook.callSync('zf')