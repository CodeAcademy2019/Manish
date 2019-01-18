var multiplePromises = require('./multiplePromises')

promise1 = Promise.resolve('HI');
promise2 = Promise.resolve('HELLO');

describe('Multiple Promises',()=>{
    it('Fetch data from two Promises',()=>{
        return expect(multiplePromises(promise1,promise2)).resolves.toEqual(['HI','HELLO']);
    })
})