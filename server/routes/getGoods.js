var express = require('express');
var router = express.Router();
var {find} = require('../libs/db');

/* router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  let goods =  await find('goods');
  res.json({goods});
}); */

router.post('/', async function(req, res, next) {
  // res.send('respond with a resource');
  let page = req.body.page;
  let start = req.body.start;
  let limitNum = 10;
  let end = page * limitNum;
  console.log(page,start,end);
  let goods =  await find('goodlist');
  // console.log(goods);
  console.log(goods.slice(start,end));
  let goods = goods.slice(start,end);
  res.json({goodlist});
});

module.exports = router;
