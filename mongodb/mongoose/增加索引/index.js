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
        unique:true//唯一索引
    },
    sn:{
        type:String,
        index:true //这样就设置好了索引
    },
})