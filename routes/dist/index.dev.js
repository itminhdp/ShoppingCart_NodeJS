"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('shop/index', {
    title: 'Express'
  });
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
