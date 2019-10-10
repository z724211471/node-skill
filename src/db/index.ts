import { connect, connection as db, set } from 'mongoose'

export default function connectDatabase(url: string) {
  db.on('error', err => {
    console.error('%s', err)
  }).on('close', () => console.log('connect success'))
  set('useCreateIndex', true)
  return connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
}
