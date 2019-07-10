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
        type:Schema.Types.ObjectId//用户id
    } ,
    cid:{
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


//查询文章 并且携带分类 和作者
Article.aggregate([
    {
        $lookup:{
            form:'ArticCate',
            localField:'cid', //自己的分类id
            foreignField:'_id',// 分类——id
            as:'cate_info'
        }
    },
    {
        $lookup:{
            form:'User',
            localField:'author_id', //自己的author_id
            foreignField:'_id',// user——id
            as:'user_info'
        }
    }
],(err,data)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log(data)
})


