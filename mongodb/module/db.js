const MongodbClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('./config');

class DB {

    //单列模式
    static getInstance(){
        if(!DB.instance){

            DB.instance = new DB();
        }
        return DB.instance;
    }
    constructor() {
        this.dbClient = '';// 保存数据库对象
        this.connect(); //实例化时 就先连接。
    }
    connect() {

        return new Promise((resolve, reject) => 
        {
            if (!this.dbClient) {

                MongodbClient.connect(config.dbUrl,{useNewUrlParser: true}, (err, client) => {

                    if (err) {
                        reject(err);
                    } else {
                        let db = client.db(config.dbName);
                        this.dbClient = db;
                        resolve(db);
                    }
                })
            }else{
                resolve(this.dbClient);
            }
        })
    }

    find(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                let result = db.collection(collectionName).find(json);
                result.toArray((err, data) => {

                    if (err) {
                        reject(err);
                    } else {

                        resolve(data);
                    }
                })
            })
        })
    }

    insert(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).insertOne(json,(err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })

    }
    update(collectionName,json1,josn2){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).updateOne(json1,{$set:josn2},(err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }
    remove(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).removeOne(json,(err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }
    getObjectID(id){
        // 转换成对象
        //在进行查找
        return new ObjectID(id);
    }
}

// let db = DB.getInstance();
// db.remove('test',{name:'zf'});

module.exports = DB.getInstance();