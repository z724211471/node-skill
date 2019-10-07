const mongoose = require('./index.js')
const Schema = mongoose.Schema

let UserSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  password: String
})

export default mongoose.model('User', UserSchema)
