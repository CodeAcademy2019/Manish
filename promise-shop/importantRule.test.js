var importantRule = require('./importantRule');

describe('Promise',()=>{
    it('should get Rejected',()=>{
        expect(importantRule.promise).rejects.toMatch('OH NOES')
    })
})
describe('',()=>{
    it('Should print',()=>{
        expect(importantRule.a).toEqual([1,2,3,4,5,'OH NOES'])
    })
})
describe('AlwaysThrow()',()=>{
    it('should throw error',()=>{
        expect(importantRule.alwaysThrows).toThrowError('OH NOES')
    })
})
describe('Iterate()',()=>{
    it('should return num+1',()=>{
        expect(importantRule.iterate(1)).toEqual(2)
    })
})