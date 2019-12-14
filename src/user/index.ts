import UserModel from '../db/user'
import * as svgCaptcha from 'svg-captcha'
  
import { getConnection, getRepository } from "typeorm";
import { Users } from '../db/index'
function userReg(ctx, res) {
  //   var mobile = ctx.body.username
  let body = ctx.request.body
  if (!body['username'] || !body['password']) {
    return (ctx.body = {
      code: 400,
      msg: '用户名或密码不能为空'
    })
  }
 getConnection().createQueryBuilder().insert().into(Users).values([{name: body['username'], password: body['password']}])
 .execute().then(rec=>{
  res.send({ code: 200, msg: "注册成功" });  
 })
  // return regUser
  //   .save()
  //   .then(rec => {
  //     ctx.body = {
  //       code: 200,
  //       msg: '注册成功'
  //     }
  //     console.log(rec)
  //   })
  //   .catch(err => {
  //     ctx.body = {
  //       code: 400,
  //       msg: '注册失败,请重试'
  //     }
  //     console.log('112154')
  //     console.log(err)
  //   })
}

function userCode(ctx) {
  let captcha = svgCaptcha.create({
    // 翻转颜色
    inverse: false,
    // 字体大小
    fontSize: 38,
    // 噪声线条数
    noise: 3,
    // 宽度
    width: 80,
    // 高度
    height: 32
  })
  ctx.set('Content-Type', 'image/svg+xml')
  ctx.body = captcha.data
}

export { userReg, userCode }
