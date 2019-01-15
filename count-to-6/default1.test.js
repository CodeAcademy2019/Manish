var default1 = require('./default1')

var toEqualArray = {
    comment: ['should return mid-value',
              'should return 0.5 for no input',
              'should return error for string inputs'],
    inputParameters: [[3,4],
                      [],
                      ['abc']],
    outputParameters: [3.5,
                       0.5,
                       'Invalid Arguments']
};

var notToEqualArray = {
    comment: ['should not return value other than mid value',
              'should not return error for Integer Input'],
    inputParameters: [[3,4],
                      [2,3]],
    outputParameters: [3,
                       'Invalid Arguments']
}

describe('Default Arguments for Mid-Value',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            expect(default1(...toEqualArray.inputParameters[i])).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            expect(default1(...notToEqualArray.inputParameters[i])).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})