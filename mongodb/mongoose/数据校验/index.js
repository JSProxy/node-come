const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
},(err)=>{
    if(!err){
        console.log('连接成功')
    }
});

//默认校验 参数
const TestSchema = mongoose.Schema({
    title:{
        type:String,
    },
    sn:{
        type:String,
        required:true, //必须要传
        maxlength:20, //最大长度
        minxlength:10 //最小长度
    },
    age:{
        type:Number,
        min:0,
        max:150 //最大值  用在number
    },
    status:{  //值必须要在数组内部
        type:String,  
        default:'1',  
        enum:['1','2','3','4','5']//枚举  使用在string 类型上的
    },
    phone:{
        type:String,
        match:/^139(.*)/i //正则表达式 只存139 开头得电话号码
    }
})

//自定义校验
const TestSchema = mongoose.Schema({
    type:{
        validate:function(type){

            return type.length>=10;
        }
    }
})