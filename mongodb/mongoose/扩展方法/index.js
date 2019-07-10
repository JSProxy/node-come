const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
},(err)=>{
    if(!err){
        console.log('连接成功')
    }
});
// 定义数据
// 不要给不常用的字段配置索引
const TestSchema = mongoose.Schema({
    title:{
        type:String,
    },
    sn:{
        type:String,
        index:true
    },
})
//扩展静态方法
TestSchema.statics.findBySn = (sn)=>{
    return new Promise((resolve,reject)=>{

        this.find({"sn":sn},(errr,data)=>{

            if(err){
                console.log(err);
                reject(err);
            }
            resolve(data);
        })
    })
}
// 扩展 实例方法  注意指向
TestSchema.methods.prind = function(){
    // 用到的地方比较少
    console.log('我是个实例方法')
    console.log(this.title);
}

const Test = mongoose.model('Test',TestSchema,'test');

let a = new Test({
    title:'zzz',
    sn:'1232441'
})
a.prind();