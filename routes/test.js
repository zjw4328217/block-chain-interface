const promise = require('bluebird')
const request = promise.promisifyAll(require('request'));
const axios = require('axios');
(async ()=>{
    try {
        
        let options = {
            url: 'https://api.huobi.me/market/tickers'
        }
        // let result =await request.getAsync(options)
        let data = await axios.get('https://api.huobi.be/market/tickers')
    console.log(data.data.data);
        // console.log(result.data);
    } catch (error) {
     console.log(error,'err');   
    }
})();