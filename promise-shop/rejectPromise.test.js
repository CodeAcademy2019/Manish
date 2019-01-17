var reject = require('./rejectPromise');

jest.useFakeTimers();

describe('Rejecting Promise',()=>{
    it('Promise is Rejected',()=>{
        return expect(reject.promise).rejects.toEqual(new Error('REJECTED!'))
    })
})
describe('setTimeOut',()=>{
    reject.rejectFun();
    it('setTimeout() should be called once',()=>{
        expect(setTimeout).toHaveBeenCalledTimes(1);
    })
    it('setTimeout() called with any (func,300)',()=>{
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),300);
    })
})