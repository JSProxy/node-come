const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
},(err)=>{
    if(!err){
        console.log('连接成功')
    }
});

// 文章分类
const ArticleCateSchema = mongoose.Schema({
    title:String,
    desc:String,
    add_time:Date,
})
// 文章
const ArticleSchema = mongoose.Schema({
    title:String,
    desc:String,
    add_time:Date,
    content:String,
    author_name:String,
    author_id:{
        ref:'User', //需要定义ref mode的名称
        type:Schema.Types.ObjectId//用户id
    } ,
    cid:{
        ref:'ArticleCate',//需要定义ref mode的名称
        type:Schema.Types.ObjectId
    } //分类的id
})
// 用户
const UserSchema = mongoose.Schema({
    username:String,
    password:String,
    cname:String,
    age:String,
    add_time:Date
})
let ArticleCate = mongoose.model('ArticCate',ArticCateSchema,'ArticCate');
let Article = mongoose.model('Article',ArticleSchema,'Article');
let User = mongoose.model('User',UserSchema,'User');

//查询文章 并且携带分类 和作者 需要引入 3 个模型
 //不建议使用
 // cid 和 author_id  会被替换成 查询的信息
Article.find({}).populate('cid').populate('author_id').exec((err,data)=>{

})
