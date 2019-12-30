import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
//import connectDatabase from '../src/db/index'
import "reflect-metadata";
import { createConnection } from "typeorm";
import { userReg, userCode,userLogin } from '../src/user/index'
import { wxlogin } from '../src/user/wx'
import {Users} from '../src/db/index'
const app = new Koa()

// const User = require('../db/user/user')
let router = new Router()
// const dburl = 'mongodb://127.0.0.1:27017/mydb'
// connectDatabase(dburl)
// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })
app.use(async (ctx, next) => {
  ctx.set({
      'Access-Control-Allow-Origin': '*', // 打开跨域
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept Authorization',
  });
  
  // 如果前端设置了 XHR.setRequestHeader('Content-Type', 'application/json')
  // ctx.set 就必须携带 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept Authorization'
  // 如果前端设置了 XHR.setRequestHeader('Authorization', 'xxxx') 同样的就是上面 Authorization 字段
  // 并且这里要转换一下状态码
  if (ctx.request.method === 'OPTIONS') {
      ctx.response.status = 200;
  }
  try {
      await next();
  } catch (err) {
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
          message: err.message
      }
  }
})
console.log(__dirname)
createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "czy",
  password: "123456",
  database: "test",
  entities:[Users],
  synchronize: true,
  logging: false,
}).then(rec=>{
 console.log('成功吗')
}).catch(err=>{

})
app.use(bodyParser())

router.post('/re', userReg)
router.post('/code', userCode)
router.post('/wxlogin', wxlogin)
router.post('/login', userLogin)
app.use(router.routes()).use(router.allowedMethods())
// Use connect method to connect to the server

app.listen(3000, () => {
  console.log('成功')
})
