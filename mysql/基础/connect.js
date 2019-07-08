const Mysql = require('mysql')
const MySqlObj = Mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zhangfeng',
    database: 'test'
})
MySqlObj.connect((error)=>{
    if(error){

    }else{
        console.log('连接数据库成功')
    }
});
//判断表是否存在
let hasFrom = `SELECT table_name FROM information_schema.TABLES WHERE table_name ='card'`
//student 是否存在
let isHasFrom = `select * from information_schema.tables where table_name ='student'`
//如果表不存在就建立 
let isCreateTable = `create table if not exists tablename`
//重模板创建
let isCreateTableTemp = `create table if not exists like old_table_name`
//如果存在就删除
let droptable= `drop table if exists student`
//创建数据库
let createDataBase = `CREATE DATABASE test`;
//创建表
let createTable = `Create Table websites (id VARCHAR(20), name VARCHAR(20),url VARCHAR(256), alexa VARCHAR(20), country VARCHAR(20) )`

// //查某张表
let sql = `SELECT * FROM websites LIMIT 5`; //5条数据
let sql = `SELECT name, url FROM websites`;//查询某一些列
// // 插入 数据
var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var  addSqlParam = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
//插入多个 使用 VALUES ?
var  addSqlParams = [['菜鸟工具', 'https://c.runoob.com','23453', 'CN'], ['菜鸟工具', 'https://c.runoob.com','23453', 'CN']];

// // 更新 存在就更新 不存在 就增加 通过id 判断
let updataSql = 'UPDATA websites SET name=?,url=? WHERE id=?'
var updataSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//删除
let deleteUerSql = `DELETE FROM　user where name='zf'`;
//加入两个表 或者更多表 也就是组合数据 返回


// MySqlObj.query(createTable,(error)=>{
//     if(error){
//         console.log(error);
//     }else{

//     }
// })

MySqlObj.query(addSql,addSqlParams,(error,results,fields)=>{
    if(error){console.log(error)};
    MySqlObj.query(sql,(error,results,fields)=>{
        if(error){

        }else{
            console.log(fields);
            console.log(results);
        }
    })
})


// MySqlObj.end((error)=>{
//     if(error){

//     }else{
//         console.log('结束连接')
//     }
// });//结束连接