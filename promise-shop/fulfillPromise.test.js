var fulfill = require('./fulfillPromise');

jest.useFakeTimers();

describe('Promise',()=>{
    it('should Resolve',()=>{
        return expect(fulfill.promise).resolves.toEqual('FULFILLED!')
    })
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