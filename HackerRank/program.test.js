const pileOfPurls = require('./program')

describe('Profit Calculation',()=>{
    it('For a single stack',()=>{
        expect(pileOfPurls.calcProfit(5,['7','3','10','9','10'])).toEqual([[4,5],11]);
    })
})