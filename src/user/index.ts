let User=require('../../db/user/user')

function userReg(req,res,next){
  var mobile = req.body.mobile;
  console.log(req.body)
  var regUser = new User({
      mobile: req.body.mobile,
      pwd: req.body.pwd,
      name: req.body.name
  });
  regUser.save(function (err, content) {
      if (err) {
          return res.send({status: 0, msg: err || '注册失败'});
      } else {
          return res.send({status: 1, msg: "注册成功"});
      }
  })
}



module.exports={
  userReg
}