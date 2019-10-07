import * as Koa from 'koa'
import * as Router from 'koa-router'
import connectDatabase from '../src/db/index'
const app = new Koa()

const User = require('../db/user/user')
let router = new Router()
const dburl = 'mongodb://127.0.0.1:27017/mydb'
connectDatabase(dburl)
app.use(async ctx => {
  ctx.body = 'Hello World'
})

router.post('/re', User.userReg)
app.use(router.routes())
// Use connect method to connect to the server

app.listen(3000)
