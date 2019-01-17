var fulfill = require('./fulfillPromise');

jest.useFakeTimers();

describe('Fulfilling Promise',()=>{
    it('Promise is Resolved',()=>{
        return expect(fulfill.promise).resolves.toEqual('FULFILLED!')
    })
    // it('Promise is not Rejected',()=>{
    //     return expect(fulfill.promise).rejects.not.toEqual(new Error())
    // })
})
describe('setTimeOut',()=>{
    it('setTimeout() should be called once',()=>{
        fulfill.promiseFun();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    })
    it('setTimeout() called with any (func,300)',()=>{
        fulfill.promiseFun();
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),300);
    })
})