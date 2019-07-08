const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const app = new Koa();
const router = new Router();
// 使用模板引擎
app.use(views('views', {
    extension: 'ejs'
}));
app.use(async (ctx, next) => {
    //公共信息
    //任何路由 都可使用
    ctx.state = {
        name: 'zf',
        age: '18'
    }
    await next();
})
// app.use(views('views',{map:{html:'ejs'})); 这种方式 的话结尾使用 html

router.get('/', async (ctx) => {
    let arr = ['1', '2', '3', '5']
    await ctx.render('index', {
        title: 'ejs hello',
        list: arr,
        html: '<h2>h2</h2>',
        num: 5

    });
})
app.use(router.routes());
app.listen(3000);