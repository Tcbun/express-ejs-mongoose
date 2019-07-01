const express = require('express');
const router = express.Router();
const init = require('../model/init');

/* GET users listing. */
router.get('/', function (req, res, next) {
  init.findOne({ init_id: 0 }, 'nav', function (err, doc) {
    res.render('mng', doc)
  })
});
router.post('/', function (req, res, next) {
  if (req.body.xiugaiwei !== '') {
    init.updateOne({
      nav: { $elemMatch: { title: req.body.selected } }
    },
      { $set: { "nav.$.title": req.body.xiugaiwei } }
      ,
      function (err, doc) {
        console.log('修改成功！')
      })
  }

  if (req.body.add !== '') {
    init.updateOne({
      init_id: 0
    }, {
        $push: { nav: { title: req.body.add } }
      }, function (err, doc) {
        console.log('增加了！')
      }
    )
  }

})
module.exports = router;
