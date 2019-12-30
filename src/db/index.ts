import { connect, connection as db, set } from 'mongoose'
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
// export default function connectDatabase(url: string) {
//   db.on('error', err => {
//     console.error('%s', err)
//   }).on('close', () => console.log('connect success'))
//   set('useCreateIndex', true)
//   return connect(
//     url,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
// }

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  password: string
  
  @Column()
  avatar: string

  @Column()
  sex: number

  @Column()
  token: string
  
  @Column()
  phone: string

  @Column()
  wxinfo: string

  @Column()
  qqinfo: string
}
