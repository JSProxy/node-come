// const Koa = require('koa');
const MongodbClient = require('mongodb').MongoClient;

const dbUrl = 'mongodb://127.0.0.1:27017/';
const dbName = 'test';
console.time('start');

//官方 数据 连接数据库 比较慢
MongodbClient.connect(dbUrl,(err,client)=>{

    if(err){
        console.log(err);
        return;
    }
    let db = client.db(dbName);

    db.collection('test').insertOne({'name':'www','age':99},(err,result)=>{
        if(!err){
            //断开连接
            client.close();
            console.log('增加数据成功');
            console.timeEnd('start');
        }
    })  
    //查询数据
    let result = db.collection('test').find({});

    result.toArray((err,data)=>{
         //断开连接
         client.close();
         console.log('增加数据成功');
         console.timeEnd('start');
    })
})