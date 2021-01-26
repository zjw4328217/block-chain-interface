const axios = require('axios');
const fs= require('fs');
// axios.get('http://chenzejiang.com:7001/vscode-btc-price-watch')
//         .then((res) => {
//             console.log(res.data,'1');
//         })


(async ()=>{
    let data = await axios.get('https://api.huobi.be/market/tickers')
    console.log(data.data.data);
        // .then((res) => {
        //     // console.log(res.data.data,'2');
        //     // fs.writeFileSync('a.json',res.data.data)
        //     let data = res.data.data;
        //     let result = data.filter(item => item['symbol'] == 'ethusdt' || item['symbol'] == 'btcusdt'||item['symbol']=='ltcusdt')
        //     console.log(result,'3');
        //     fs.writeFileSync('a.json',JSON.stringify(result))
        // })
})()