import { connect, connection as db } from 'mongoose'

export default function connectDatabase(url: string) {
  db.on('error', err => {
    console.error('%s', err)
  }).on('close', () => console.log('connect success'))
  return connect(url)
}
