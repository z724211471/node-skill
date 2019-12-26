import { get } from "https";
async function wxlogin(ctx, next) {
  await get('https://api.weixin.qq.com/sns/jscode2session', res => {
      console.log(res)
      let dd
      res.on('data', (d) => {
        console.log(process.stdout.write(d))
        // ctx.send=process.stdout.write(d) 
        dd = process.stdout.write(d)
      })
      res.on('end', () => {
        ctx.body = dd
      })
      res.on('error', err => {
        console.log(err)
      })
    })
}

export { wxlogin }