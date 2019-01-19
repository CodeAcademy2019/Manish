const pileOfPurls = require('./program')

describe('Profit for single stack',()=>{
    it('positive profits',()=>{
        expect(pileOfPurls.calcProfit(5,['7','3','10','9','10'])).toEqual([[4,5],11]);
    })
    it('Zero Profit',()=>{
        expect(pileOfPurls.calcProfit(5,['10','10','10','10','10'])).toEqual([[1,2,3,4,5,0],0]);
    })
    it('Negative Profit',()=>{
        expect(pileOfPurls.calcProfit(5,['14','13','16','13','14'])).toEqual([[0],0]);
    })
})

describe('Profit for Multiple Stacks',()=>{
    it('Basic Case',()=>{
        expect(pileOfPurls.calculate('1\n6 12 3 10 7 16 5\n2\n5 7 3 10 9 10\n8 1 2 3 4 10 16 10 4\n0')).toEqual('1\n8\n4\n2\n41\n8 9 10 12 13');
    })
})

describe('Public Cases',()=>{
    it('Case 1',()=>{
        expect(pileOfPurls.calculate('4\n10 16 14 12 15 17 18 1 1 1 1\n10 20 20 10 10 8 18 17 1 1 1\n15 1 2 3 4 15 14 13 12 11 10 20 19 18 17 16\n5 1 1 18 17 1\n0')).toEqual('1\n52\n16');
    })
    it('Case 2',()=>{
        expect(pileOfPurls.calculate('3\n3 19 9 2\n5 20 11 10 7 1\n2 18 2\n0')).toEqual('1\n1\n5 7 8 10');
    })
    it('Case 3',()=>{
        expect(pileOfPurls.calculate('2\n6 1 2 3 10 15 5\n6 15 5 15 5 15 5\n0')).toEqual('1\n24\n3 4 5 6 7 8 9 10 12');
    })
    it('Case 4',()=>{
        expect(pileOfPurls.calculate('1\n10 5 13 8 7 11 9 2 10 11 13\n2\n7 8 1 9 15 3 6 10\n4 7 2 14 10\n0')).toEqual('1\n15\n7 8\n2\n29\n8 9');
    })
    it('Case 5',()=>{
        expect(pileOfPurls.calculate('3\n7 3 2 1 3 10 12 2\n6 12 13 14 15 2 3\n3 1 2 3\n0')).toEqual('1\n62\n16');
    })
    it('Case 6',()=>{
        expect(pileOfPurls.calculate('2\n1 13\n1 16\n4\n6 3 4 10 11 7 13\n3 14 13 10\n2 8 5\n1 14\n0')).toEqual('1\n0\n0\n2\n22\n7');
    })
    it('Case 7',()=>{
        expect(pileOfPurls.calculate('2\n6 10 13 14 13 1 9\n6 6 11 7 15 11 8\n0')).toEqual('1\n6\n3 4 9');
    })
    it('Case 8',()=>{
        expect(pileOfPurls.calculate('3\n7 4 6 7 12 15 4 11\n9 5 9 8 12 6 7 14 6 10\n11 10 5 6 7 12 17 10 8 12 10 9\n0')).toEqual('1\n38\n13 15 16');
    })
    it('Case 9',()=>{
        expect(pileOfPurls.calculate('3\n3 10 10 1\n5 10 1 10 1 10\n4 5 15 10 5\n0')).toEqual('1\n32\n8 9 11 12');
    })
    it('Case 10',()=>{
        expect(pileOfPurls.calculate('2\n5 4 5 6 10 4\n5 9 8 7 4 9\n0')).toEqual('1\n34\n10');
    })
    it('Case 11',()=>{
        expect(pileOfPurls.calculate('4\n11 3 4 11 9 11 9 11 12 7 14 6\n19 16 17 18 19 1 7 5 3 3 11 12 8 9 13 12 11 11 11 2\n3 13 16 17\n14 3 13 13 21 11 12 9 7 5 4 5 12 13 5\n0')).toEqual('1\n21\n12 14 16 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34');
    })
    it('Case 12',()=>{
        expect(pileOfPurls.calculate('8\n6 12 8 16 2 7 2\n6 1 3 11 9 11 9\n3 11 15 4\n4 2 3 9 11\n4 14 13 11 1\n2 11 2\n6 12 8 12 8 12 8\n1 8\n0')).toEqual('1\n55\n18 20 21 22 23 24 25 26 27 28 29 31');
    })
})

