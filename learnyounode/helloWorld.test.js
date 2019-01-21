var helloWorld = require('./helloWorld')

describe('Hello World',()=>{
    it('Should print "HELLO WORLD"',()=>{
        expect(helloWorld()).toEqual('HELLO WORLD');
    })
    it('Should not print anything other than "HELLO WORLD"',()=>{
        expect(helloWorld()).not.toEqual('Hello World');
    })
})