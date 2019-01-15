var arrowFunctionsAndThis = require('./arrowFunctionsAndThis')

var toEqualArray = {
    comment: ['should print Ouch!'],
    inputParameters: [],
    outputParameters: ['Ouch!']
};

var notToEqualArray = {
    comment: ['should not print Ouch'],
    inputParameters: [],
    outputParameters: ['Ouch']
}

describe('acessing "this"',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            expect(arrowFunctionsAndThis.kick()).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            expect(arrowFunctionsAndThis.kick()).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})