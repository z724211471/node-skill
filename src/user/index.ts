import UserModel from '../db/user'

function userReg(ctx, res) {
  //   var mobile = ctx.body.username
  let body = ctx.request.body
  console.log(ctx.request.body)
  console.log(res)
  var regUser = new UserModel({
    username: body.username,
    password: body.password,
    createtime: new Date().getTime() + 86400000
  })
  regUser.save(function(err, content) {
    console.log(err)
    console.log(content)
    if (err) {
      ctx.body = { status: 0, msg: err || '注册失败' }
    } else {
      ctx.body = { status: 1, msg: '注册成功' }
    }
  })
  console.log(UserModel.find({ toJSON: true }))
}

export { userReg }
