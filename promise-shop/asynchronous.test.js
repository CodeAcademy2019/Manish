var asynchronous = require('./asynchronous');

jest.useFakeTimers();
jest.mock('fs');

describe('Promise Resolved',()=>{
    it('Promise is Resolved',()=>{
        return expect(asynchronous.mainFun()).resolves.toEqual('PROMISE VALUE')
    })
})

describe('Control Flow',()=>{
    it('MAIN => PROMISE',()=>{
        return expect(asynchronous.a).toEqual(['MAIN PROGRAM','PROMISE VALUE'])
    })
})
