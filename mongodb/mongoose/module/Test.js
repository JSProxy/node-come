const mongoose = require('./db');

let TestSchema = mongoose.Schema({
    name: String,
    age: Number,
    status:{
        type:Number,
        default:1
    }
})

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
            Test.deleteOne({'_id':'5d243ee4f30578280802d39d'},(err,result)=>{
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