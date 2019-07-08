const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const bodyparser = require('koa-bodyparser') //
const app = new Koa();
const router = new Router();
// 使用模板引擎
app.use(views('views', {
    extension: 'ejs'
}));
app.use(bodyparser());

router.get('/', async (ctx) => {
    await ctx.render('post');
})

function getpost(ctx) {

    return new Promise(function (resolve, reject) {
        //获取表单提交数据
        try {
            let str = '';
            ctx.req.on('data', function (chunk)
            {
                str += chunk;
            })
            ctx.req.on('end', function () 
            {
                resolve(str);
            })
        } catch (error) 
        {
            console.log(error);
        }
    })
}
//原生
router.post('/add1', async (ctx, next) => {

 let data = await getpost(ctx);
 ctx.body = data;
})

//bodyparser
router.post('/add2', async (ctx, next) => {
    //直接获取
    ctx.body = ctx.request.body
})

// 中间件获取表单提交数据
app.use(router.routes());
app.listen(3000);