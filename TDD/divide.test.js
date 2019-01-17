const divide = require('./divide');

describe('divide',()=>{
    it('should return the quotient', ()=>{
        expect(divide(2,2)).toEqual(1);
    })
    it('should return smile', ()=>{
        expect(divide(2,0)).toEqual(':)');
    })
});