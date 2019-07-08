const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

// use 中间件  先执行  和位置无关
app.use(async (ctx ,next)=>{

    await next();  //匹配其他路由后再执行下面的404
    // 先进后出  洋葱图
    if(ctx.status == 404){
        ctx.status = 404;
      ctx.body = '404页面'
    }else{
        console.log(ctx.url);
    }
})
// 应用级中间件
app.use(async (ctx,next)=>{
    console.log(new Date());
   await next();//完成后继续向下执行
})

router.get('/',async (ctx,next)=> {

    console.log('路由级中间件');
    await next(); //路由级中间件
})

router.get('/',async (ctx)=> {
    ctx.body = '首页'

})

router.get('/news',async (ctx)=> {
    // 获取gey传值
    ctx.query
    ctx.querystring
    // 请求信息 中也可以获取参数
    ctx.request
    ctx.body = 'news'
})

//动态路由
router.get('/koa/:aid/:cid',async (ctx)=> {
    ctx.body = ctx.params.aid+ctx.params.cid;
})

//启动路由
app.use(router.routes())
app.use(router.allowedMethods())  //自动更具状态 设置响应头
app.listen(3000);