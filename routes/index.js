var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    data: {
      title: 'Express',
      nav: [
        {
          title: 'nav1',
          subnav: {
            title: 'subnav1'
          }
        },
        {
          title: 'nav2',
          subnav: {
            title: 'subnav2'
          }
        },
        {
          title: 'nav3',
          subnav: {
            title: 'subnav3'
          }
        },
        {
          title: 'nav4',
          subnav: {
            title: 'subnav4'
          }
        },
        {
          title: 'nav5',
        },
        {
          title: 'nav6',
        },
      ],
      bannerText:[
        'bannerText1',
        'bannerText2'
      ]
    }
  });
});

module.exports = router;
