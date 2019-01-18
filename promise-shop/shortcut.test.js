const shortcut = require('./shortcut')

describe('with catch method',()=>{
    it('promise rejects',()=>{
        return expect(shortcut()).rejects.toEqual(new Error('REJECTED SECRET VALUE!'))
    })
})