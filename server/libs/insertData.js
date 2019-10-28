const request = require('request');
const {
  insert
} = require('./db');
/* request('https://shopapi.smartisan.com/mobile/skulist?page=3', (err, res, body) => {
  const goods = JSON.parse(body).data.skuInfo;
  // console.log(news);
  goods.forEach(ele => {
    console.log(ele)
    insert('goods', [ele]);
  })
  // insert('goods',[news])
}); */

request('https://shopapi.smartisan.com/mobile/classify',(err,res,body)=>{
  const classifyGoods = JSON.parse(body);
  console.log(classifyGoods);
  insert('classifyGoods',[classifyGoods]);
})


