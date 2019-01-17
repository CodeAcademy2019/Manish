var rejectOrNot = require('./rejectOrNot');

jest.useFakeTimers();

describe('Resolving or Rejecting Promise',()=>{
    it('Promise is Resolved',()=>{
        return expect(rejectOrNot.promise).resolves.toEqual('I FIRED')
    })
})
// describe('Resolve and Reject',()=>{
//     it('Resolve() called',()=>{
//         rejectOrNot.rejectOrNotFun();
//         expect(resolve).toHaveBeenCalledTimes(1);
//     })
//     it('Reject() called',()=>{
//         rejectOrNot.rejectOrNotFun();
//         expect(reject).toHaveBeenCalledTimes(1);
//     })
// })