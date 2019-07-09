// 保存在服务器上  基于cookie  比cookie 更安全 
// 第一次反问 服务器 会创建 一个session 对象 类似 key value 把这key这个个值以cookie 形式存到浏览器中
// 下次请求携带cookie 用户信息保存在session 中
const Koa = require('koa');
const session = require('koa-session');
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
// 设置session
app.keys = ['some secret hurr']; // cookie签名
const CONFIG = {
  key: 'koa:sess', //默认
  maxAge: 86400000,
  autoCommit: true, 
  overwrite: true, 
  httpOnly: true, 
  signed: true, 
  rolling: false,  // 每次访问都更新session
  renew: false,  // 每次反问快要到时间的时候 再设置
};

app.use(session(CONFIG, app));


router.get('/', async (ctx)=>{

    ctx.session.username = 'zf';
  let arr = ['1', '2', '3', '5']
   await  ctx.render('artIndex', {
    title: 'art hello',
    list: arr,
    html: '<h2>h2</h2>',
    num: 5,
    cday:new Date()
});
})

router.get('/login', async (ctx)=>{
    
  ctx.body =  ctx.session.username
})

// 中间件获取表单提交数据
app.use(router.routes());
app.listen(3000);