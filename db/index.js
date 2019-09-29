const mongoose = require('mongoose');

const dburl='mongodb://127.0.0.1:27017/mydb'
mongoose.connect(dburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if (err) {
    console.log('connect fail');
} else {
    console.log('connect success');
}
});

module.exports=mongoose