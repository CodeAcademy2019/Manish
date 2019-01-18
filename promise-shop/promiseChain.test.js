const promiseChain = require('./promiseChain')

describe('Promise Chain',()=>{
    it('First Promise => New Value',()=>{
        expect(promiseChain.firstPromise).resolves.toEqual('New Value')
    })
    it('Second Promise => Other Value',()=>{
        expect(promiseChain.firstPromise).resolves.toEqual('Other Value')
    })
})