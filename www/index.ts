const Koa=require('koa')
const app = new Koa();
const Router = require('koa-router');
const mongoose=require('../db/index')
const User=require('../src/user/index.ts')
let router = new Router();

app.use(async ctx => {
  ctx.body = 'Hello World';
});
console.log(User)
router.post('re',User.userReg)
app.use(router.routes()).use(router.allowedMethods())
// Use connect method to connect to the server


app.listen(3000);