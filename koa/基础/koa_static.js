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
   await  ctx.render('static');
})

// 中间件获取表单提交数据
app.use(router.routes());
app.listen(3000);