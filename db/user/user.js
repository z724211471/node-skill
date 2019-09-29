const mongoose = require("./index");
const Schema=mongoose.Schema

let UserSchema=new Schema({
  name:{type:String},
  mobile:{type:String},
  password:{type:String}
})
module.exports = mongoose.model('User', UserSchema);