const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const render = require('koa-art-template'); // art   模板引擎
const app = new Koa();

const router = new Router();
const path = require('path');

// 使用模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
  });
// 可以配置多个
app.use(static('./static'));
router.get('/', async (ctx)=>{
  let arr = ['1', '2', '3', '5']
   await  ctx.render('artIndex', {
    title: 'art hello',
    list: arr,
    html: '<h2>h2</h2>',
    num: 5,
    cday:new Date()
});
})

// 中间件获取表单提交数据
app.use(router.routes());
app.listen(3000);