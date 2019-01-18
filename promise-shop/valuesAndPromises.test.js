const valuesAndPromises = require('./valuesAndPromises')

describe('Promises and Values',()=>{
    it('First Promise => MANHATTAN',()=>{
        return expect(valuesAndPromises.firstPromise).resolves.toEqual('MANHATTAN')
    })
    it('Second Promise => DR. MANHATTAN',()=>{
        return expect(valuesAndPromises.secondPromise).resolves.toEqual('DR. MANHATTAN')
    })
})