// 解决跨域 存储信息
// 浏览器历史记录
// 免登入
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const static = require('koa-static');
const app = new Koa();
const router = new Router();

// 可以配置多个
app.use(static('./static'));

// 使用模板引擎
app.use(views('views', {
    extension: 'ejs'
}));


router.get('/', async (ctx)=>{
    // 设置中文 获取不到 需要先转base64
    let zh_cn = new Buffer('张峰').toString('base64'); //转换成base64
    
    ctx.cookies.set('userInfo','token',{
        maxAge:1000*60*60*24, //60秒过期
        httpOnly:true, //只有服务器可以反问
        expires:'2020-12-1',
        path:'/news', //配置可以反问的路径
        // domain:'cookie',//可以反问的cookie域名 不写当前域名 .baidu.com
        secure:false,//true https 可以反问
    })
    let arr = ['1', '2', '3', '5']
    await ctx.render('index', {
        title: 'ejs hello',
        list: arr,
        html: '<h2>h2</h2>',
        num: 5,
        name:'zzz'

    });
})
router.get('/news', async (ctx)=>{

    // 获取中文cookie
    let data = new Buffer(ctx.cookies.get('userInfo'),'base64').toString();

    // 获取cookie
    console.log( ctx.cookies.get('userInfo'))
   await  ctx.render('static');
})

// 中间件获取表单提交数据
app.use(router.routes());
app.listen(3000);