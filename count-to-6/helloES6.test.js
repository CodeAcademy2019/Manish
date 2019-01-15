var helloES6 = require('./helloES6')

var toEqualArray = {
    comment: ['should print Hello ES6'],
    inputParameters: [],
    outputParameters: ['HELLO ES6']
};

var notToEqualArray = {
    comment: ['should not print other that Hello ES6'],
    inputParameters: [],
    outputParameters: ['Hello']
}

describe('Hello ES6',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            expect(helloES6()).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            expect(helloES6()).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})