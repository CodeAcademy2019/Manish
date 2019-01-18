const throwError = require('./throwError')

describe('Throwing Error in Promise',()=>{
    it('Resolved and return output',()=>{
        return expect(throwError('{"one":1}')).resolves.toEqual({one:1});
    })
    it('Resolved and return Error',()=>{
        return expect(throwError('{one:1}')).resolves.toEqual('Unexpected token o in JSON at position 1');
    })
})