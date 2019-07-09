const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
},(err)=>{
    if(!err){
        console.log('连接成功')
    }
});
// mongoose.connect('mongodb://admin:123456@127.0.0.1:27017/test',{ useNewUrlParser: true });
//定义数据库类型
// 和数据库表 对应 
let TestSchema = mongoose.Schema({
    name: String,
    age: Number,
    status:{
        type:Number,
        default:1
    }
})
// 定义模型 首字母大写 和数据表对应
// let User = mongoose.model('User',UserSchema); //默认查找Users 
let Test = mongoose.model('Test', TestSchema, 'test');

function test(type) {


    switch (type) {
        case 'find':
            //查询Test表数据
            Test.find({}, (err, data) => {

                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            })


            break;
        case 'insert':
            let u = new Test({
                name: 'ooo',
                age: 89
            })
            u.save((err) => {
                if (!err) {
                    console.log('数据增加成功');
                }
            })

            break;
        case 'update':
            // objectid 不用转换 内部会自动转换
            Test.updateOne({
                name: 'www'
            }, {
                name: 'rrr'
            }, (err) => {
                if (!err) {
                    console.log('数据更新成功');
                }
            })
            break;
        case 'remove':
            Test.deleteOne({'_id':'5d245dba3fafb42c545e3a7c'},(err,result)=>{
                if(!err){
                    console.log('删除成功')
                }
            })
            break;
        default:
            break;
    }
}

test('remove');