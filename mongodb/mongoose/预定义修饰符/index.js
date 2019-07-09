const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
},(err)=>{
    if(!err){
        console.log('连接成功')
    }
});

// 定义数据
const TestSchema = mongoose.Schema({
    title:{
        type:String,
        trim:true  ,//去掉左右空格
        uppercase:true ,//大写字母
        lowercase:true //小写字母
    }
})

//自定义修饰符 Getters  Setters  设置数据时进行格式化 建议使用setters

const TestSchema = mongoose.Schema({
    pic:{
        type:String,
        default:'http://www.baidu.com',
        set(params){
            //增加数据时进行处理
            if(!params){
                return params;
            }else{
                if(params.indexOf('http://')!=0 && params)
                {

                return 'http://'+params;
                }else{
                    return params;
                }
            }

        }
    }
})