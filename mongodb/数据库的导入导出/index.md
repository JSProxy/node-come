//CMD 中 输入 不需要mongo
//导出 数据库
//数据库名和导出 路径
### mongodump -h 127.0.0.1 -d test -o D://user/db
////还原到哪个数据库 还原数据路径
### mongorestore -h 127.0.0.1 -d user D://user/db