const pileOfPurls = require('./program')

describe('Profit for single stack',()=>{
    it('positive profits',()=>{
        expect(pileOfPurls.calcProfit(5,['7','3','10','9','10'])).toEqual([[4,5],11]);
    })
    it('Zero Profit',()=>{
        expect(pileOfPurls.calcProfit(5,['10','10','10','10','10'])).toEqual([[5],0]);
    })
    it('Negative Profit',()=>{
        expect(pileOfPurls.calcProfit(5,['10','10','10','10','10'])).toEqual([[5],0]);
    })
})

describe('Profit for Multiple Stacks',()=>{
    it('Basic Case',()=>{
        expect(pileOfPurls.calculate('1\n6 12 3 10 7 16 5\n2\n5 7 3 10 9 10\n8 1 2 3 4 10 16 10 4\n0')).toEqual([[[[4],8]],[[[4,5],11],[[4,5,8],30]]]);
    })
})