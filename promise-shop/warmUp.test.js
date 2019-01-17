var warmUp = require('./warmUp');

jest.useFakeTimers();

describe('Warm Up',()=>{
    warmUp();
    it('setTimeout() should be called once',()=>{
        expect(setTimeout).toHaveBeenCalledTimes(1);
    })
    it('setTimeout() called with any (func,300)',()=>{
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),300);
    })
})