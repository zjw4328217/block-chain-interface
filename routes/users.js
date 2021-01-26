var express = require('express');
var router = express.Router();
const promise = require('bluebird')
const request = promise.promisifyAll(require('request'));
var util  = require('../util')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/price', async (req, res, next) => {
  try {
    
    // let data = await util.getPrice()
    // console.log(data);
    let options = {
      url: 'https://api.huobi.me/market/tickers'
    }
    let result =await request.getAsync(options)
    console.log(result.data);
    res.json(result.data)
      // return res.data
  //   let arr = [
  //     {
  //     id:1,
  //     name:'离散'
  //   },
  //     {
  //     id:2,
  //     name:'离散1'
  //   },
  //     {
  //     id:3,
  //     name:'离散2'
  //   },
  //     {
  //     id:4,
  //     name:'离散3'
  //   },
  // ]
  //   res.json(arr)
  } catch (error) {
    console.log(error);
  }
  // res.render('index', { title: 'Express' });
});

router.post('/info', function(req, res, next) {
  // res.send('respond with a resource');
  let arr = [
    {
    id:1,
    name:'离散'
  },
    {
    id:2,
    name:'离散1'
  },
    {
    id:3,
    name:'离散2'
  },
    {
    id:4,
    name:'离散3'
  },
]
  res.json(arr)
});

module.exports = router;
