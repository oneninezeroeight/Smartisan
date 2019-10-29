const request = require('request');
const {
  insert
} = require('./db');
//插入首页列表数据
/* request('https://shopapi.smartisan.com/mobile/skulist?page=3', (err, res, body) => {
  const goods = JSON.parse(body).data.skuInfo;
  // console.log(news);
  goods.forEach(ele => {
    console.log(ele)
    insert('goods', [ele]);
  })
  // insert('goods',[news])
}); */

//插入分类数据
/* request('https://shopapi.smartisan.com/mobile/classify',(err,res,body)=>{
  const classifyGoods = JSON.parse(body);
  console.log(classifyGoods);
  insert('classifyGoods',[classifyGoods]);
});
 */

 //插入首页分类数据
request('https://shopapi.smartisan.com/mobile/home',(err,res,body)=>{
  const homeGoods = JSON.parse(body);
  console.log(homeGoods);
  insert('homeGoods',[homeGoods]);
})


