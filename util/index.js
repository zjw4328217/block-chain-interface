const axios = require('axios')
const util = {
    /**
     * @调用 util.getPrice
     */
    async getPrice(){
        let res = await axios.get('https://api.huobi.me/market/tickers')
            console.log(res.data);
            return res.data
        // })
    }
};
// module.exports = util;
console.log('666');
(async ()=>{
    try {
        let res =await util.getPrice()
        console.log(res);
        
    } catch (error) {
        console.log(error,'error');
    }

})()