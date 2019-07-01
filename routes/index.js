const express = require('express')
const router = express.Router()
const init = require('../model/init')

/* GET home page. */
router.get('/', function (req, res, next) {
  init.findOne({init_id:0},function(err,doc){
    res.render('index',{
      data:doc
    })
  })
});

module.exports = router;
