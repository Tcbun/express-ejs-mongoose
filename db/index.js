const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27107', {useNewUrlParser: true},function(){
    console.log('数据库连上了')
})

