import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
//import connectDatabase from '../src/db/index'
import "reflect-metadata";
import { createConnection } from "typeorm";
import { userReg, userCode } from '../src/user/index'
const app = new Koa()

// const User = require('../db/user/user')
let router = new Router()
// const dburl = 'mongodb://127.0.0.1:27017/mydb'
// connectDatabase(dburl)
// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })
createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "czy",
  password: "123456",
  database: "test",
  entities:['../src/db/*.ts'],
  synchronize: true,
  logging: false,
}).then(rec=>{
  console.log('成功',rec)
}).catch(err=>{
  console.log('失败',err)
})
app.use(bodyParser())

router.post('/re', userReg)
router.post('/code', userCode)
app.use(router.routes()).use(router.allowedMethods())
// Use connect method to connect to the server

app.listen(3000, () => {
  console.log('成功')
})
