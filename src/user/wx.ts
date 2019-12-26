import { get } from "https";

let gs=new Promise((resolve, reject)=>{
  get('https://api.weixin.qq.com/sns/jscode2session', res => {
    res.on('data', (d) => {
      resolve(process.stdout.write(d))
    })
    res.on('end', () => {
    
    })
    res.on('error', err => {
      reject(err)
    })
  })
})


async function wxlogin(ctx, next) {
  await gs.then(rec=>{
    console.log(rec)
    ctx.body={
      ss:rec
    }
  })
}

export { wxlogin }