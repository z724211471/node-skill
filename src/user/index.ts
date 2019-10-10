import UserModel from '../db/user'
function userReg(ctx, res) {
  //   var mobile = ctx.body.username
  let body = ctx.request.body
  if (!body['username'] || !body['password']) {
    return (ctx.body = {
      code: 400,
      msg: '用户名或密码不能为空'
    })
  }
  var regUser = new UserModel({
    username: body.username,
    password: body.password,
    createtime: new Date()
  })
  return regUser
    .save()
    .then(rec => {
      ctx.body = {
        code: 200,
        msg: '注册成功'
      }
      console.log(rec)
    })
    .catch(err => {
      ctx.body = {
        code: 400,
        msg: '注册失败,请重试'
      }
      console.log('112154')
      console.log(err)
    })
}

export { userReg }
