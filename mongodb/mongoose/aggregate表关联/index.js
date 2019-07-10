const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
},(err)=>{
    if(!err){
        console.log('连接成功')
    }
});

// 实现两个表的关联

// 订单表
const OrderSchema = mongoose.Schema({
    order_id:'1',
    uid:Number,
    trade_no:String,
    all_price:Number,
    all_num:Number
})

let Order = mongoose.model('Order',OrderSchema,'order');

//请求order 的同时把 重order_item 中拿通过order_id 拿到对应数据  作为items 显示
Order.aggregate([
    {
        $lookup:{
            form:'order_item',
            localField:'order_id',
            foreignField:'order_id',
            as:'items'
        }
    },{
        $match:{
            all_price:{$age:90}//大于90的
        }
    }
],(err,data)=>{

    console.log(data);
})

// ------------------------------------------------------------------------------------------------
// 商品表
const OrderIteMSchema = mongoose.Schema({
    order_id:'1',
    name:'qwqwqw'
})
let OrderItem =  mongoose.model('OrderItem',OrderSchema,'order_item');
// 查询order_id 和订单总价格

// 查询某一个商品的   订单 号 和订单信息
order_item.aggregate([
    {
        $lookup:{
            form:'order',
            localField:'order_id',
            foreignField:'order_id',
            as:'order_info'
        }
    },
    {
        $match:{
            _id:mongoose.Types.ObjectId('112313213123131')
        }
    }
],(err,data)=>{


    if(err){
        console.log(err);
        return;
    }

    console.log(data)
})
